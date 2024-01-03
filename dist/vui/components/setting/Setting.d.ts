/// <reference types="react" />
type Props = {
    title: string;
    label: string;
    badge?: string;
    helpUrl?: string;
    description?: React.ReactNode;
    isEnabled?: boolean;
    onToggle?: () => void;
    children?: React.ReactNode;
};
export declare const VuiSetting: ({ title, label, badge, helpUrl, description, isEnabled, onToggle, children, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
