/// <reference types="react" />
type Props = {
    className?: string;
    id?: string;
    name?: string;
    value?: string;
    fullWidth?: boolean;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    maxLength?: number;
};
export declare const VuiTextArea: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLTextAreaElement | null>>;
export {};
