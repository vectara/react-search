/// <reference types="react" />
import { OptionListItem } from "./types";
export declare const colorIcon: (icon: OptionListItem<string>["icon"], color: OptionListItem<string>["color"]) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
type Props<T> = OptionListItem<T> & {
    isSelectable?: boolean;
    isSelected?: boolean;
};
export declare const VuiOptionsListItem: <T extends unknown = unknown>({ value, label, icon, color, href, target, onClick, isSelectable, isSelected, testId, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
