/// <reference types="react" />
import { Props as VuiAppSideNavProps } from "./appSideNav/AppSideNav";
type Props = {
    children: React.ReactNode;
    navItems?: VuiAppSideNavProps["items"];
    navContent?: React.ReactNode;
    full?: boolean;
};
export declare const VuiAppLayout: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export {};
