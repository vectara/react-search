export type Pagination = {
    currentPage: number;
    numPages: number;
    onSelectPage: (page: number) => void;
};
type Props = Pagination & {
    isDisabled?: boolean;
};
export declare const VuiTablePagination: ({ currentPage, numPages, onSelectPage, isDisabled }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
