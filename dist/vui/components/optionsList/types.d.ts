import { ReactElement } from "react";
import { TextColor } from "../typography/types";
export type OptionListItem<T> = {
    value: T;
    label: string;
    icon?: ReactElement | null;
    href?: string;
    target?: string;
    onClick?: (value: T) => void;
    color?: TextColor;
    testId?: string;
};
