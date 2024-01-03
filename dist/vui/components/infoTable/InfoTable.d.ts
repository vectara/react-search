/// <reference types="react" />
declare const PADDING: readonly ["xxs", "xs", "s"];
export type InfoTableColumnAlign = "left" | "right";
type Column = {
    name: string;
    render?: React.ReactNode;
    width?: string;
    align?: InfoTableColumnAlign;
};
export type InfoTableRowType = "sectionHeader" | "footer";
export type InfoTableRow = {
    type?: InfoTableRowType;
    values: Record<string, {
        render: React.ReactNode;
        colSpan?: number;
    } | undefined>;
};
type Props = {
    columns: Column[];
    rows: InfoTableRow[];
    isHeaderVisible?: boolean;
    padding?: (typeof PADDING)[number];
};
export declare const VuiInfoTable: ({ columns, rows, isHeaderVisible, padding }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
