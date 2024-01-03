/// <reference types="react" />
type Props = {
    header: React.ReactNode;
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};
export declare const VuiAccordion: ({ header, children, isOpen, setIsOpen, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
