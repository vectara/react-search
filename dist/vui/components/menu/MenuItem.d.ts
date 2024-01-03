import { Props as LinkProps } from "../link/Link";
type Props = {
    className?: string;
    title?: string;
    text?: string;
    onClick?: () => void;
    href?: LinkProps["href"];
};
export declare const VuiMenuItem: ({ className, title, text, href, onClick, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
