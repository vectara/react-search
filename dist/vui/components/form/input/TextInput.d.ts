/// <reference types="react" />
declare const SIZE: readonly ["m", "l"];
type Props = {
    className?: string;
    id?: string;
    name?: string;
    isInvalid?: boolean;
    value?: string;
    size?: (typeof SIZE)[number];
    fullWidth?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    onSubmit?: () => void;
    maxLength?: number;
    autoComplete?: boolean;
    autoFocus?: boolean;
};
export declare const VuiTextInput: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement | null>>;
export {};
