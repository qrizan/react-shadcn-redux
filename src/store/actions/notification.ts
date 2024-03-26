import {
  NOTIFICATION_MESSAGE
} from '@/store/types/notification/notificationMessage';

export const notificationMessage = (message: string) => ({
  type: NOTIFICATION_MESSAGE,
  payload: {
    message
  }
});

