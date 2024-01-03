import { Row } from "./types";
export type Action<T> = {
    label: string;
    isDisabled?: (row: T) => boolean;
    onClick?: (row: T) => void;
    href?: (row: T) => string | undefined;
};
export type Props<T> = {
    row: any;
    actions: Action<T>[];
    onToggle: (isSelected: boolean) => void;
};
export declare const VuiTableRowActions: <T extends Row>({ row, actions, onToggle }: Props<T>) => import("react/jsx-runtime").JSX.Element | null;
