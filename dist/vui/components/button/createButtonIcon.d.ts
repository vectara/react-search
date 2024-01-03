/// <reference types="react" />
import { Props as BaseButtonProps } from "./BaseButton";
import { ButtonColor } from "./types";
export declare const createButtonIcon: (icon: BaseButtonProps["icon"], size: BaseButtonProps["size"], color: ButtonColor, colorToIconColorMap?: Record<ButtonColor, string>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
