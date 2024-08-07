
export interface CategoryArticles {
    [business: string]: NoticeResponse
}

export interface NoticeResponse {
    status?: string;
    totalResults?: number;
    articles: Article[];
    page?: number;
}

export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: null | string;
    url: string;
    urlToImage: null | string;
    publishedAt: Date | string;
    content: null | string;
}

export interface Source {
    id: ID | null | string;
    name: string;
}

export enum ID {
    GoogleNews = "google-news",
}