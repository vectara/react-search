/// <reference types="react" />
type Props = {
    summary?: string;
    children?: React.ReactNode;
    selectedCitationPosition?: number;
    onClickCitation?: (position: number) => void;
    className?: string;
};
export declare const VuiSummary: ({ summary, selectedCitationPosition, onClickCitation, children, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
