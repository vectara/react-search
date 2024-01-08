import { ChangeEventHandler, FormEventHandler, KeyboardEventHandler } from "react";
import { AllowedStyleOverrides } from "types";
type Props = {
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    autoFocus?: boolean;
    onSubmit?: FormEventHandler;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    isLoading?: boolean;
    styles?: AllowedStyleOverrides;
};
export declare const SearchInput: ({ value, onChange, placeholder, autoFocus, onSubmit, isLoading, styles, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
