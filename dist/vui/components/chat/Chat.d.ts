import React from "react";
import { ChatStyle, ChatTurn } from "./types";
type Props = {
    openPrompt: string;
    chatStyle: ChatStyle;
    setChatStyle: (chatStyle: ChatStyle) => void;
    introduction?: string;
    suggestions?: string[];
    onInput: (input: string) => void;
    onRetry: (trun: ChatTurn) => void;
    onReset: () => void;
    conversation: ChatTurn[];
    settings?: React.ReactNode;
    isInspectionEnabled?: boolean;
};
export declare const VuiChat: ({ openPrompt, chatStyle, setChatStyle, introduction, suggestions, onInput, onRetry, onReset, conversation, settings, isInspectionEnabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
