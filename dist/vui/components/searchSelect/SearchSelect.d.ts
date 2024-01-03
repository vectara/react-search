import { Props as OptionsListProps } from "../optionsList/OptionsList";
import { Props as PopoverProps } from "../popover/Popover";
type Props<T> = Pick<PopoverProps, "isOpen" | "setIsOpen"> & Pick<OptionsListProps<T>, "options"> & {
    children: PopoverProps["button"];
    title?: string;
    selected: T[];
    onSelect: (selected: T[]) => void;
    isMultiSelect?: boolean;
};
export declare const VuiSearchSelect: <T extends unknown = unknown>({ children, title, isOpen, setIsOpen, options, onSelect, isMultiSelect, selected }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
