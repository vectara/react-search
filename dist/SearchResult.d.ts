import { AllowedStyleOverrides, DeserializedSearchResult } from "./types";
type Props = {
    searchResult: DeserializedSearchResult;
    isSelected?: boolean;
    shouldOpenInNewWindow?: boolean;
    styles?: AllowedStyleOverrides;
};
export declare const SearchResult: ({ searchResult, isSelected, shouldOpenInNewWindow, styles, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
