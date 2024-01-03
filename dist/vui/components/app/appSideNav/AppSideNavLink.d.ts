import { TreeItem } from "../types";
type Props = Pick<TreeItem, "name" | "path" | "iconBefore" | "iconAfter" | "isActive" | "className">;
export declare const VuiAppSideNavLink: ({ path, name, iconBefore, iconAfter, isActive, className, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
