/// <reference types="react" />
export type Notification = {
    color: "primary" | "success" | "warning" | "danger";
    message: string;
};
type Props = {
    notification: Notification;
    onDismiss: (notification: Notification) => void;
    notificationsCount: number;
    children?: React.ReactNode;
};
export declare const VuiNotification: ({ notification, onDismiss, notificationsCount, children }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
