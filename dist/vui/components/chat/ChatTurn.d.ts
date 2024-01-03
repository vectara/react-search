import { ChatTurn } from "./types";
type Props = {
    turn: ChatTurn;
    isInspectionEnabled?: boolean;
    setInspectedTurn: (turn: ChatTurn) => void;
    onRetry: (turn: ChatTurn) => void;
};
export declare const VuiChatTurn: ({ turn, isInspectionEnabled, setInspectedTurn, onRetry }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
