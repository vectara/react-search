import { ReactNode } from "react";
import { ICON_COLOR, ICON_SIZE } from "./types";
type Props = {
    children: ReactNode;
    color?: (typeof ICON_COLOR)[number];
    className?: string;
    size?: (typeof ICON_SIZE)[number];
    inline?: boolean;
};
export declare const VuiIcon: ({ children, size, color, className, inline, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
