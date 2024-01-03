import { MouseEvent } from "react";
import { Props as LinkProps } from "../link/Link";
export declare const BADGE_COLOR: readonly ["accent", "primary", "danger", "warning", "success", "neutral"];
type Props = {
    children: React.ReactNode;
    className?: string;
    color: (typeof BADGE_COLOR)[number];
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    href?: LinkProps["href"];
    target?: LinkProps["target"];
    track?: LinkProps["track"];
};
export declare const VuiBadge: ({ children, className, color, onClick, href, target, track, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
