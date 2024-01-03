import { RadioButtonConfig } from "./types";
type Props = RadioButtonConfig & {
    groupName: string;
    onChange: (value: string) => void;
};
export declare const VuiSuperRadioButton: ({ label, description, value, checked, onChange, groupName, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
