// Custom types declarations
interface ReportCard {
    id: string;
    summary: string;
    city?: string;
    state?: string;
    country?: string;
    canonical_city?: string;
    canonical_state?: string;
    canonical_country?: string;
    shape?: string;
    dateOccurred?: Date;
    dateReported?: Date;
    content?: string;
    media?: string[];
}

interface Breadcrumb {
    label: string;
    url: string;
}

interface LocationLink {
    title: string;
    url: string;
    count?: number;
}

interface R2Asset {
    key: string;
    filename: string;
    url: string;
    mimeType: string;
    size: number;
    lastModified: Date;
}

interface SearchMetadata {
    totalRecords: number;
    totalChunks: number;
    chunkSize: number;
    chunks: ChunkInfo[];
    lastUpdated: string;
}

interface ChunkInfo {
    index: number;
    count: number;
    startDate: string;
    endDate: string;
    filename: string;
}

interface SearchResult extends ReportCard {
    _score: number;
    _matchCount: number;
}

interface SearchResponse {
    results: SearchResult[];
    loadedChunks: number;
    totalChunks: number;
    hasMore: boolean;
    metadata?: SearchMetadata;
    error?: string;
}