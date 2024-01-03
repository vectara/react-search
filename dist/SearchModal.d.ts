import React, { ChangeEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
type Props = {
    isLoading: boolean;
    searchValue?: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (evt: ReactKeyboardEvent) => void;
    onClose: () => void;
    resultsList: React.ReactNode;
    isOpen?: boolean;
};
export declare const SearchModal: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};
