import { OptionListItem } from "./types";
declare const SIZE: readonly ["s", "m", "l"];
export type Props<T> = {
    className?: string;
    options: OptionListItem<T>[];
    onSelectOption?: (value: T) => void;
    selected?: T | T[];
    isSelectable?: boolean;
    isScrollable?: boolean;
    size?: (typeof SIZE)[number];
};
export declare const VuiOptionsList: <T extends unknown = unknown>({ className, options, onSelectOption, selected, isSelectable, isScrollable, size, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
