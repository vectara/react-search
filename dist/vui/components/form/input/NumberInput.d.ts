/// <reference types="react" />
declare const SIZE: readonly ["m", "l"];
type Props = {
    className?: string;
    id?: string;
    isInvalid?: boolean;
    value?: number;
    size?: (typeof SIZE)[number];
    fullWidth?: boolean;
    onChange: (value?: number) => void;
    max?: number;
    min?: number;
    step?: number;
    autoFocus?: boolean;
};
export declare const VuiNumberInput: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement | null>>;
export {};
