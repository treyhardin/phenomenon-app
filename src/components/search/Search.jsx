import { createEffect, createResource, createSignal, onMount, For, createMemo, Suspense } from "solid-js"
import { debounce } from "../../lib/utils"
import { searchService } from "../../lib/search-service"
import styles from "./search.module.css"
import Close from "../../icons/close.svg?raw"

export default function Search(props) {

  let input, searchDialog

  const [results, setResults] = createSignal([])
  const [searchStatus, setSearchStatus] = createSignal('')
  const [isSearching, setIsSearching] = createSignal(false)
  const [hasAllData, setHasAllData] = createSignal(false)
  const [currentSearch, setCurrentSearch] = createSignal('')
  const [visibleCount, setVisibleCount] = createSignal(20) // Start with 20 visible results

  // Create separate signals for progressive results
  const [searchQuery, setSearchQuery] = createSignal('')
  const [allResults, setAllResults] = createSignal([])
  
  // Quick results resource - resolves immediately with first chunk results
  const [quickResults] = createResource(
    searchQuery,
    async (query) => {
      if (!query || query.trim().length < 2) {
        setAllResults([])
        return []
      }
      
      console.log(`🔍 Resource: Quick search for "${query}"`)
      const quickResponse = await searchService.search(query, { chunkLimit: 3 })
      
      if (quickResponse.error) throw new Error(quickResponse.error)
      
      const quickResults = quickResponse.results || []
      setSearchStatus(`Found ${quickResults.length} recent results`)
      setAllResults(quickResults) // Set initial results immediately
      
      // Load comprehensive results in background (don't await)
      if (quickResponse.hasMore) {
        setSearchStatus(`Found ${quickResults.length} recent results • Loading historical data...`)
        
        searchService.loadMoreResults(
          query, 
          quickResponse.loadedChunks, 
          { chunkLimit: quickResponse.totalChunks - quickResponse.loadedChunks }
        ).then(remainingResponse => {
          if (!remainingResponse.error && query === searchQuery()) {
            const additionalResults = remainingResponse.results || []
            const combinedResults = [...quickResults, ...additionalResults]
            
            combinedResults.sort((a, b) => {
              if (b._score !== a._score) return b._score - a._score
              return new Date(b.dateOccurred) - new Date(a.dateOccurred)
            })
            
            setAllResults(combinedResults) // Update with comprehensive results
            setSearchStatus(`Found ${combinedResults.length} total results`)
            console.log(`🔄 Combined results: ${quickResults.length} recent + ${additionalResults.length} historical = ${combinedResults.length} total`)
          }
        }).catch(error => {
          console.error('❌ Background search error:', error)
        })
      }
      
      return quickResults // Return quick results immediately
    }
  )

  // Memoized visible results for performance
  const visibleResults = createMemo(() => {
    const results = allResults()
    return results.slice(0, visibleCount())
  })

  const loadMoreResults = () => {
    const currentVisible = visibleCount()
    const totalResults = allResults().length
    const newVisible = Math.min(currentVisible + 20, totalResults)
    setVisibleCount(newVisible)
    console.log(`📄 Showing ${newVisible} of ${totalResults} results`)
  }

  // Intersection Observer for infinite scroll
  let loadMoreRef
  const setupIntersectionObserver = () => {
    if (!loadMoreRef) {
      console.log('⚠️ loadMoreRef not available')
      return
    }
    
    console.log('📡 Setting up intersection observer')
    const observer = new IntersectionObserver(
      (entries) => {
        const totalResults = allResults().length
        const visible = visibleCount()
        console.log(`👀 Intersection: visible=${visible}, total=${totalResults}, isIntersecting=${entries[0].isIntersecting}`)
        
        if (entries[0].isIntersecting && visible < totalResults) {
          console.log('🔄 Loading more results...')
          loadMoreResults()
        }
      },
      { threshold: 0.1 }
    )
    
    observer.observe(loadMoreRef)
    return () => {
      console.log('🧹 Cleaning up intersection observer')
      observer.disconnect()
    }
  }
  

  const addKeyboardListener = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        // Check if element is connected to DOM before calling togglePopover
        if (searchDialog && searchDialog.isConnected) {
          searchDialog.togglePopover()
        }
      }
    })
  }

  const handleInput = (term) => {
    // Clear results if term is empty
    if (!term.trim()) {
      setSearchQuery('');
      setSearchStatus('');
      setVisibleCount(20);
      return;
    }

    setCurrentSearch(term);
    setSearchStatus('Searching recent data...');
    setVisibleCount(20); // Reset visible count for new search
    setSearchQuery(term); // This triggers the resource
  }

  const debouncedHandleInput = debounce(handleInput, 200)

  const handleDialogToggle = () => {
    if (searchDialog && input) {
      searchDialog.addEventListener("toggle", () => {
        setSearchQuery('')
        setSearchStatus('')
        setCurrentSearch('')
        setVisibleCount(20)
        input.value = ""
      })
    }
  }

  onMount(() => {
    input?.addEventListener("input", (e) => {
      debouncedHandleInput(e.target.value)
    })
    handleDialogToggle()
    addKeyboardListener()
  })

  // Set up intersection observer when results change
  createEffect(() => {
    const results = allResults()
    const visible = visibleCount()
    console.log(`🔍 Effect: results=${results.length}, visible=${visible}`)
    
    if (results.length > 0) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const cleanup = setupIntersectionObserver()
        return cleanup
      }, 100)
    }
  })

  return (
    <dialog 
      id="search-menu" 
      ref={searchDialog}
      class={styles.searchMenu}
      popover 
    >
      <div class={styles.menuHeader}>
        <span class={`${styles.headerTitle} caption`}>Search Database</span>
        <button
          class={styles.closeButton}
          popovertarget="search-menu"
          innerHTML={Close}
        >
        </button>
      </div>
          <input 
            type="search" 
            ref={input}
            placeholder="Location, keyword, etc."
            id="search"
            class="h5"
            autofocus
          />
          <div class={styles.searchStatus}>
            {searchStatus() && (
              <p class="caption">
                📊 {searchStatus()}
              </p>
            )}
          </div>
          <div class={styles.searchResults}>
            <Suspense fallback={
              <div class={styles.searchLoading}>
                <p class="caption">🔄 Searching...</p>
              </div>
            }>
              <For each={visibleResults()}>
                {(result) => (
                  <div class={styles.resultCard}>
                    {result.id && <p>{result.id}</p>}
                    {result.dateOccurred && <p>{new Date(result.dateOccurred).toLocaleDateString()}</p>}
                    {(result.city || result.state || result.country) && <p>{result.city ? result.city : result.state ? result.state : result.country}</p>}
                    {result.summary && 
                      <a 
                        href={`/${result.country}${result.state ? `/${result.state}` : ''}${result.city ? `/${result.city}` : ''}${`?report-id=${result.id}`}`}
                        class="h6"
                      >{result.summary}</a>}
                  </div>
                )}
              </For>
              
              {/* Loading trigger for infinite scroll */}
              {(() => {
                const results = allResults()
                const visible = visibleCount()
                return results.length > 0 && visible < results.length && (
                  <div class={styles.loadMore}>
                    <div 
                      ref={(el) => {
                        loadMoreRef = el
                        console.log('🎯 loadMoreRef assigned:', !!el)
                      }} 
                      style={{ height: '20px', background: 'rgba(255,0,0,0.1)' }}
                    >
                      {/* Invisible intersection target */}
                    </div>
                    <button 
                      onClick={() => {
                        console.log('🖱️ Manual load more clicked')
                        loadMoreResults()
                      }}
                      class="caption"
                      style={{ padding: '8px 16px', margin: '8px 0' }}
                    >
                      Load More ({visible} of {results.length})
                    </button>
                  </div>
                )
              })()}
              
              {/* Show total count */}
              {(() => {
                const results = allResults()
                const visible = visibleCount()
                return results.length > 0 && (
                  <div class={styles.resultCount}>
                    <p class="caption">
                      Showing {visible} of {results.length} results
                      {visible < results.length && " • Scroll for more"}
                    </p>
                  </div>
                )
              })()}
            </Suspense>
          </div>
    </dialog>
  )
}