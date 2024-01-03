import { Props as ButtonPrimaryProps } from "../button/ButtonPrimary";
import { Props as OptionsListProps } from "../optionsList/OptionsList";
import { Props as PopoverProps } from "../popover/Popover";
export type Props = Pick<PopoverProps, "isOpen" | "setIsOpen"> & Pick<OptionsListProps<any>, "options" | "onSelectOption"> & Pick<ButtonPrimaryProps, "children" | "icon" | "color" | "size" | "className" | "fullWidth" | "onClick"> & {
    type?: "primary" | "secondary";
};
export declare const VuiOptionsButton: ({ type, isOpen, setIsOpen, children, icon, color, size, className, fullWidth, onSelectOption, options, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
