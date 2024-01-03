/// <reference types="react" />
type Props = {
    labelFor: string;
    label: string;
    children: React.ReactElement;
    helpText?: React.ReactNode;
    errors?: string[];
    isRequired?: boolean;
};
export declare const VuiFormGroup: ({ children, labelFor, helpText, label, errors, isRequired }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
