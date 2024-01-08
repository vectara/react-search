import { FC } from "react";
import { AllowedStyleOverrides } from "./types";
import "./_index.scss";
interface Props {
    customerId: string;
    apiKey: string;
    corpusId: string;
    apiUrl?: string;
    historySize?: number;
    styles?: {
        toggle?: AllowedStyleOverrides;
        input?: AllowedStyleOverrides;
        resultItem?: AllowedStyleOverrides;
    };
}
/**
 * A client-side search component that queries a specific corpus with a user-provided string.
 */
export declare const Search: FC<Props>;
export {};
