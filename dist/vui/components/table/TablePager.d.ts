export type Pager = {
    onSelectPreviousPage?: () => void;
    onSelectNextPage?: () => void;
};
type Props = Pager & {
    isDisabled?: boolean;
};
export declare const VuiTablePager: ({ onSelectPreviousPage, onSelectNextPage, isDisabled }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
