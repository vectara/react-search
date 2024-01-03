/// <reference types="react" />
import { TabSize } from "./types";
type Props = {
    children: React.ReactNode;
    append?: React.ReactNode;
    className?: string;
    size?: TabSize;
};
export declare const VuiTabs: ({ children, className, append, size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
