import { ReactNode } from "react";
declare const COLOR: readonly ["danger", "neutral"];
declare const paddingToClassNameMap: {
    readonly xs: "vuiPrompt--paddingXs";
    readonly s: "vuiPrompt--paddingS";
    readonly m: "vuiPrompt--paddingM";
    readonly l: "vuiPrompt--paddingL";
    readonly xl: "vuiPrompt--paddingXl";
    readonly xxl: "vuiPrompt--paddingXxl";
};
type Props = {
    children: ReactNode;
    className?: string;
    color?: (typeof COLOR)[number];
    padding?: keyof typeof paddingToClassNameMap;
    onClick?: () => void;
    isSpeechBubble?: boolean;
};
export declare const VuiPrompt: ({ children, className, onClick, color, padding, isSpeechBubble }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
