export declare const PROGRESS_BAR_COLOR: readonly ["accent", "primary", "danger", "warning", "success", "neutral"];
type Props = {
    color: (typeof PROGRESS_BAR_COLOR)[number];
    percentage: number;
    className?: string;
    value?: string;
};
export declare const VuiProgressBar: ({ color, percentage, className, value, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
