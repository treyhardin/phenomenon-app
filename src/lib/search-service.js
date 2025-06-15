class SearchService {
  constructor() {
    this.metadata = null;
    this.loadedChunks = new Map(); // Cache loaded chunks
  }

  async loadMetadata() {
    if (this.metadata) return this.metadata;
    
    try {
      const response = await fetch(`/api/search/metadata.json`);
      if (!response.ok) throw new Error(`Failed to load metadata: ${response.status}`);
      this.metadata = await response.json();
      return this.metadata;
    } catch (error) {
      console.error('Error loading search metadata:', error);
      throw error;
    }
  }

  async loadChunk(chunkIndex) {
    // Return cached chunk if already loaded
    if (this.loadedChunks.has(chunkIndex)) {
      return this.loadedChunks.get(chunkIndex);
    }

    try {
      const response = await fetch(`/api/search/chunk/${chunkIndex}.json`);
      if (!response.ok) throw new Error(`Failed to load chunk ${chunkIndex}: ${response.status}`);
      
      const chunkData = await response.json();
      this.loadedChunks.set(chunkIndex, chunkData);
      
      console.log(`📥 Loaded search chunk ${chunkIndex} (${chunkData.length} records)`);
      return chunkData;
    } catch (error) {
      console.error(`Error loading chunk ${chunkIndex}:`, error);
      throw error;
    }
  }

  async loadMultipleChunks(chunkIndices) {
    const loadPromises = chunkIndices.map(index => this.loadChunk(index));
    const chunks = await Promise.all(loadPromises);
    return chunks.flat();
  }

  searchInData(data, query, options = {}) {
    const {
      limit = null, // No default limit - show all results
      fields = ['searchText'],
      fuzzy = true
    } = options;

    if (!query || query.trim().length < 2) return [];
    
    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    const results = [];

    for (const item of data) {
      let score = 0;
      let matchCount = 0;
      
      // Search across specified fields
      const searchableText = fields
        .map(field => item[field] || '')
        .join(' ')
        .toLowerCase();

      // Calculate match score
      for (const term of searchTerms) {
        if (searchableText.includes(term)) {
          matchCount++;
          // Boost score for exact matches in title/summary
          if (item.summary?.toLowerCase().includes(term)) {
            score += 3;
          } else {
            score += 1;
          }
        }
      }

      // Only include results that match at least half the search terms
      if (matchCount >= Math.ceil(searchTerms.length / 2)) {
        results.push({
          ...item,
          _score: score,
          _matchCount: matchCount
        });
      }
    }

    // Sort by score and match count, then apply limit if specified
    const sortedResults = results.sort((a, b) => {
      if (b._score !== a._score) return b._score - a._score;
      return b._matchCount - a._matchCount;
    });

    return limit ? sortedResults.slice(0, limit) : sortedResults;
  }

  async search(query, options = {}) {
    const {
      limit = null, // No default limit - show all results
      loadAllChunks = false,
      chunkLimit = 3 // How many chunks to load initially
    } = options;

    try {
      // Load metadata first
      const metadata = await this.loadMetadata();
      
      if (loadAllChunks) {
        // Load all chunks (for comprehensive search)
        console.log('🔍 Loading all chunks for comprehensive search...');
        const allChunkIndices = Array.from({ length: metadata.totalChunks }, (_, i) => i);
        const allData = await this.loadMultipleChunks(allChunkIndices);
        const results = this.searchInData(allData, query, { limit });
        
        return {
          results,
          loadedChunks: metadata.totalChunks,
          totalChunks: metadata.totalChunks,
          hasMore: false,
          metadata
        };
      } else {
        // Progressive loading: start with recent chunks
        console.log(`🔍 Searching with progressive loading (${chunkLimit} chunks)...`);
        const initialChunks = Array.from({ length: Math.min(chunkLimit, metadata.totalChunks) }, (_, i) => i);
        const initialData = await this.loadMultipleChunks(initialChunks);
        const results = this.searchInData(initialData, query, { limit });
        
        // Return results with metadata about available chunks
        return {
          results,
          loadedChunks: chunkLimit,
          totalChunks: metadata.totalChunks,
          hasMore: chunkLimit < metadata.totalChunks,
          metadata
        };
      }
    } catch (error) {
      console.error('Search error:', error);
      return { results: [], error: error.message };
    }
  }

  async loadMoreResults(query, currentChunkCount, options = {}) {
    const { chunkLimit = 3, limit = null } = options;
    
    try {
      const metadata = await this.loadMetadata();
      const newChunkCount = Math.min(currentChunkCount + chunkLimit, metadata.totalChunks);
      
      // Load additional chunks
      const additionalChunks = Array.from(
        { length: newChunkCount - currentChunkCount }, 
        (_, i) => currentChunkCount + i
      );
      
      const additionalData = await this.loadMultipleChunks(additionalChunks);
      const newResults = this.searchInData(additionalData, query, { limit });
      
      return {
        results: newResults,
        loadedChunks: newChunkCount,
        totalChunks: metadata.totalChunks,
        hasMore: newChunkCount < metadata.totalChunks
      };
    } catch (error) {
      console.error('Load more results error:', error);
      return { results: [], error: error.message };
    }
  }

  // Clear cache to free memory
  clearCache() {
    this.loadedChunks.clear();
    console.log('🧹 Search cache cleared');
  }

  // Get cache statistics
  getCacheStats() {
    return {
      cachedChunks: this.loadedChunks.size,
      metadata: !!this.metadata
    };
  }
}

// Export singleton instance
export const searchService = new SearchService();