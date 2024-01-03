import { ReactNode } from "react";
import { CALLOUT_SIZE, CalloutColor } from "./types";
declare const HEADING_ELEMENT: readonly ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
type Props = {
    children?: ReactNode;
    title: string;
    headingElement: (typeof HEADING_ELEMENT)[number];
    color: CalloutColor;
    size?: (typeof CALLOUT_SIZE)[number];
    onDismiss?: () => void;
};
export declare const VuiCallout: ({ children, title, headingElement, color, size, onDismiss, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
