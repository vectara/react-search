/// <reference types="react" />
export type SearchResult = {
    title?: string;
    url?: string;
    date?: string;
    snippet: {
        pre: string;
        text: string;
        post: string;
    };
};
type Props = {
    result: SearchResult;
    className?: string;
};
export declare const VuiChatSearchResult: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement | null>>;
export {};
