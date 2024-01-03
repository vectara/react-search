/// <reference types="react" />
type AccountMenuInfo = Array<{
    title: string;
    value: React.ReactNode;
}>;
type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    button: React.ReactElement;
    info?: AccountMenuInfo;
    children?: React.ReactNode;
};
export declare const VuiAccountMenu: ({ isOpen, setIsOpen, button, info, children }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
