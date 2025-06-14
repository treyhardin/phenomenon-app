import { createEffect, createResource, createSignal, onMount } from "solid-js"
import FlexSearch from "flexsearch"
import { debounce } from "../../lib/utils"
import styles from "./search.module.css"
import Close from "../../icons/close.svg?raw"




const loadSearch = async () => {
  try {
    console.log('🔍 Loading simple search data...');
    
    const response = await fetch('/search-data.json');
    const searchData = await response.json();
    
    console.log(`✅ Loaded ${searchData.length} reports for search`);
    
    return { searchData };
  } catch (error) {
    console.error('❌ Error loading search data:', error);
    throw error;
  }
}

const [searchData] = createResource(loadSearch)

export default function Search(props) {

  let input, searchDialog

  const [ results, setResults ] = createSignal([])
  

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

  const handleInput = async (term) => {
    const data = searchData();
    if (!data) {
      console.log('🔄 Search data still loading...');
      return;
    }
    
    const { searchData: reports } = data;
    
    // Clear results if term is empty
    if (!term.trim()) {
      setResults([]);
      return;
    }

    try {
      console.log(`🔍 Searching for: "${term}"`);
      const searchTerm = term.toLowerCase();
      
      // Simple text search across all fields
      const matchingReports = reports.filter(report => 
        report.searchText.includes(searchTerm)
      );
      
      // Sort by dateOccurred (most recent first) then take top 10
      const sortedResults = matchingReports
        .sort((a, b) => new Date(b.dateOccurred) - new Date(a.dateOccurred))
        .slice(0, 10);
      
      console.log(`📋 Found ${sortedResults.length} matching reports (sorted by date):`);
      setResults(sortedResults);
      
    } catch (error) {
      console.error('❌ Search error:', error);
      setResults([]);
    }
  }

  const debouncedHandleInput = debounce(handleInput, 200)

  const handleDialogToggle = () => {
    if (searchDialog && input) {
      searchDialog.addEventListener("toggle", () => {
        setResults([])
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
          <div class={styles.searchResults}>
            {results().map((result) => (
              <div class={styles.resultCard}>
                {result.id && <p>{result.id}</p>}
                {result.dateOccurred && <p>{new Date(result.dateOccurred).toLocaleDateString()}</p>}
                {(result.city || result.state || result.country) && <p>{result.city ? result.city : result.state ? result.state : result.country}</p>}
                {/* {result.state && <p>{result.state}</p>}
                {result.country && <p>{result.country}</p>} */}
                {result.summary && 
                  <a 
                    href={`/${result.country}${result.state ? `/${result.state}` : ''}${result.city ? `/${result.city}` : ''}${`?report-id=${result.id}`}`}
                    class="h6"
                  >{result.summary}</a>}
                {/* {result.shape && <p>{result.shape}</p>} */}
                {/* {result.content && <p class="caption">{result.content}</p>} */}
                {/* {result.country && result.id && <p>{`/${result.country}${result.state ? `/${result.state}` : ''`}${result.city ? `/${result.city}` : ''`}${`#${result.id}`}`}</p>} */}
              </div>
            ))}
          </div>
    </dialog>
  )
}