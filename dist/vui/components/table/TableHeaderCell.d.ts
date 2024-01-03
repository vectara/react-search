/// <reference types="react" />
export type Props = {
    name: string;
    header: {
        isSortable?: boolean;
        render?: () => React.ReactNode;
    };
    onSort?: (column: string, direction: "asc" | "desc") => void;
};
export declare const VuiTableHeaderCell: ({ name, header, onSort }: Props) => import("react/jsx-runtime").JSX.Element;
