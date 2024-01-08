import React, { ChangeEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import { AllowedStyleOverrides } from "types";
type Props = {
    isLoading: boolean;
    searchValue?: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (evt: ReactKeyboardEvent) => void;
    onClose: () => void;
    resultsList: React.ReactNode;
    isOpen?: boolean;
    styles?: {
        input?: AllowedStyleOverrides;
        resultItem?: AllowedStyleOverrides;
    };
};
export declare const SearchModal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
