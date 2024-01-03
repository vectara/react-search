import React from "react";
export type Props = {
    button: React.ReactElement;
    children?: React.ReactNode;
    className?: string;
    header?: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    padding?: boolean;
};
export declare const VuiPopover: ({ button: originalButton, children, className, header, isOpen, setIsOpen, padding, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
