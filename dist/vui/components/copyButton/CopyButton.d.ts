import { Props as OptionsButtonProps } from "../optionsButton/OptionsButton";
type Props = {
    value: string;
    options?: OptionsButtonProps["options"];
    size: OptionsButtonProps["size"];
    label?: string;
    title?: string;
};
export declare const VuiCopyButton: ({ value, options, label, size, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
