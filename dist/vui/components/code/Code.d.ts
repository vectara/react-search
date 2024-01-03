import "prismjs/themes/prism.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import { CodeLanguage } from "./types";
type Props = {
    language?: CodeLanguage;
    onCopy?: () => void;
    children?: string;
    fullHeight?: boolean;
    "data-testid"?: string;
};
export declare const VuiCode: ({ onCopy, language, fullHeight, children, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
