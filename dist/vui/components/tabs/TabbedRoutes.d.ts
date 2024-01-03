/// <reference types="react" />
import { TabSize } from "./types";
type Props = {
    tabs: Array<{
        to: string;
        title: string;
        render?: (tabLink: React.ReactNode) => React.ReactNode;
        component: React.ReactNode;
        testId?: string;
    }>;
    size?: TabSize;
    sideContent?: React.ReactNode;
    children?: React.ReactNode;
};
export declare const VuiTabbedRoutes: ({ tabs, size, sideContent, children }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
