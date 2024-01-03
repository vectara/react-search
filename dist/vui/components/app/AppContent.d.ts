/// <reference types="react" />
import { AppContentPadding } from "./types";
type Props = {
    children?: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    padding?: AppContentPadding;
};
export declare const VuiAppContent: ({ children, className, fullWidth, padding }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
