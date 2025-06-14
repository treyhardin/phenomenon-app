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