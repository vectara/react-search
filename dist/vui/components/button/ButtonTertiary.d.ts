/// <reference types="react" />
import { Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
export type Props = BaseButtonProps & {
    color: ButtonColor;
    noPadding?: boolean;
};
export declare const VuiButtonTertiary: import("react").ForwardRefExoticComponent<BaseButtonProps & {
    color: ButtonColor;
    noPadding?: boolean | undefined;
} & import("react").RefAttributes<HTMLButtonElement | null>>;
