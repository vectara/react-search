import React from "react";
import { Props as TableRowActionsProps } from "./TableRowActions";
import { Props as TableHeaderCellProps } from "./TableHeaderCell";
import { Pagination } from "./TablePagination";
import { Pager } from "./TablePager";
import { Props as TableBulkActionProps } from "./TableBulkActions";
import { Row } from "./types";
type Column<T> = {
    name: string;
    width?: string;
    header: TableHeaderCellProps["header"];
    render?: (row: T) => React.ReactNode;
    className?: string;
};
type Props<T> = {
    isLoading?: boolean;
    idField: string | ((row: T) => string);
    columns: Column<T>[];
    rows: T[];
    actions?: TableRowActionsProps<T>["actions"];
    pagination?: Pagination | Pager;
    selection?: Selection<T>;
    search?: Search;
    onSort?: TableHeaderCellProps["onSort"];
    onReload?: () => void;
    content?: React.ReactNode;
    className?: string;
    fluid?: boolean;
};
type Selection<T> = {
    bulkActions?: TableBulkActionProps<T[]>["actions"];
    onSelectRow?: (selectedRows: T[]) => void;
    selectedRows?: T[];
};
type Search = {
    searchValue?: string;
    searchPlaceholder?: string;
    onSearchChange?: (value: string) => void;
    "data-testid"?: string;
};
export declare const VuiTable: <T extends Row>({ isLoading, idField, columns, rows, actions, pagination, selection, search, onSort, onReload, content, className, fluid, ...rest }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
