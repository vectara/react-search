/// <reference types="react" />
import { Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
export type Props = BaseButtonProps & {
    color: ButtonColor;
    solid?: boolean;
};
export declare const VuiButtonSecondary: import("react").ForwardRefExoticComponent<BaseButtonProps & {
    color: ButtonColor;
    solid?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement | null>>;
