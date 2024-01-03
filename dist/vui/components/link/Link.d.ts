import React, { ReactNode } from "react";
export type Props = {
    children: ReactNode;
    href?: string;
    className?: string;
    target?: "_blank";
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    track?: boolean;
    title?: string;
    id?: string;
    role?: string;
};
export declare const VuiLinkInternal: ({ ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const VuiLink: ({ children, href, target, onClick, className, track, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
