type Props = {
    checked: boolean;
    onChange: () => void;
    groupName: string;
    label?: string;
    disabled?: boolean;
};
export declare const VuiRadioButton: ({ checked, onChange, label, groupName, disabled, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
