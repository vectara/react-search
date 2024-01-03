/// <reference types="react" />
import { To } from "react-router-dom";
type Props = {
    children: React.ReactNode;
    className?: string;
    to?: To;
    onClick?: () => void;
    isActive?: boolean;
};
export declare const VuiTab: ({ children, className, to, onClick, isActive, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
