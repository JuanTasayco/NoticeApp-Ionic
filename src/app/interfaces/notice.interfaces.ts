export interface NoticeResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface Article {
    source: Source;
    author: string;
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