import { ReactNode } from "react";
declare const COLOR: readonly ["primary", "danger"];
type Props = {
    className?: string;
    title: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    color?: (typeof COLOR)[number];
};
export declare const VuiDrawer: ({ className, color, title, children, isOpen, onClose, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
