/// <reference types="react" />
type Props = {
    id?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
};
export declare const VuiToggle: ({ id, checked, onChange, label, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
