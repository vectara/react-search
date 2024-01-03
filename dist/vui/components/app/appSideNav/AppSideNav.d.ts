/// <reference types="react" />
import { Sections, Tree } from "../types";
export declare const buildSideNavItems: (items: Sections | Tree) => import("react/jsx-runtime").JSX.Element;
export type Props = {
    items?: Sections | Tree;
    content?: React.ReactNode;
};
export declare const VuiAppSideNav: ({ items, content }: Props) => import("react/jsx-runtime").JSX.Element;
