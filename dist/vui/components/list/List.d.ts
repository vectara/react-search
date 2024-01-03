/// <reference types="react" />
type ListItem = {
    key: string;
    isComplete: boolean;
    render: () => React.ReactNode;
};
type Props = {
    items: ListItem[];
    size?: "s" | "m";
    alignItems?: "start" | "center" | "end";
};
export declare const VuiList: ({ items, size, alignItems }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
