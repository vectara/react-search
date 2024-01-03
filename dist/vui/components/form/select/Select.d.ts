/// <reference types="react" />
declare const SIZE: readonly ["m", "l"];
type Props = {
    className?: string;
    id?: string;
    name?: string;
    isInvalid?: boolean;
    options: {
        text: string;
        value: string;
    }[];
    value: string;
    size?: (typeof SIZE)[number];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export declare const VuiSelect: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLSelectElement | null>>;
export {};
