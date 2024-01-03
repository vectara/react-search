/// <reference types="react" />
type Props = {
    children?: React.ReactNode;
    footer?: React.ReactNode;
    align?: "center" | "left" | "right";
    className?: string;
    interactive?: boolean;
    padding?: "s" | "m" | "l";
};
export declare const VuiCard: ({ children, footer, align, interactive, className, padding, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
