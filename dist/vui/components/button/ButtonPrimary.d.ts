/// <reference types="react" />
import { Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
export type Props = BaseButtonProps & {
    color: ButtonColor;
};
export declare const VuiButtonPrimary: import("react").ForwardRefExoticComponent<BaseButtonProps & {
    color: ButtonColor;
} & import("react").RefAttributes<HTMLButtonElement | null>>;
