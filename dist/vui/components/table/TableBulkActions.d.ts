import { Action } from "./TableRowActions";
import { Row } from "./types";
export type Props<T> = {
    selectedRows: any;
    actions: Action<T>[];
};
export declare const VuiTableBulkActions: <T extends Row>({ selectedRows, actions }: Props<T>) => import("react/jsx-runtime").JSX.Element;
