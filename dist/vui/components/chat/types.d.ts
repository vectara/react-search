import { SearchResult } from "../searchResult/SearchResult";
export type ChatTurn = {
    question: string;
    isLoading?: boolean;
    error?: {
        code?: string;
        message: string;
    };
    answer?: string;
    query?: string;
    language?: ChatLanguage;
    results?: SearchResult[];
};
export declare const CHAT_LANGUAGES: readonly ["auto", "eng", "deu", "fra", "zho", "kor", "ara", "rus", "tha", "nld", "ita", "por", "spa", "jpn", "pol", "tur"];
export type ChatLanguage = (typeof CHAT_LANGUAGES)[number];
export declare const CHAT_STYLE_ORDER: readonly ["closed", "condensed", "tall", "fullScreen"];
export type ChatStyle = (typeof CHAT_STYLE_ORDER)[number];
