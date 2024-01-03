import { Notification } from "./Notification";
type Props = {
    notifications: Notification[];
    onShowAll: () => void;
    onDismiss: (notification: Notification) => void;
    onDismissAll: () => void;
    onClose: () => void;
};
export declare const VuiNotifications: ({ notifications, onShowAll, onDismiss, onDismissAll, onClose }: Props) => import("react/jsx-runtime").JSX.Element | null;
export {};
