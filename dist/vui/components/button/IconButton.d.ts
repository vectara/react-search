import { ReactElement } from "react";
import { Props as LinkProps } from "../link/Link";
import { ButtonColor, BUTTON_SIZE } from "./types";
type Props = {
    className?: string;
    icon: ReactElement;
    color?: ButtonColor;
    size?: (typeof BUTTON_SIZE)[number];
    onClick?: () => void;
    href?: LinkProps["href"];
    target?: LinkProps["target"];
    track?: LinkProps["track"];
    tabIndex?: number;
};
export declare const VuiIconButton: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement | null>>;
export {};
