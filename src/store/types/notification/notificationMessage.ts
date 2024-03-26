export const NOTIFICATION_MESSAGE = 'NOTIFICATION_MESSAGE';

interface NotificationMessageAction {
  type: typeof NOTIFICATION_MESSAGE,
  payload: {
    message: string
  }
}

export type NotificationMessageTypes =
  | NotificationMessageAction;
