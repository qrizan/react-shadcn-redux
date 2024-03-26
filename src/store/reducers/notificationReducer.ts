import {
  NOTIFICATION_MESSAGE,
  NotificationMessageTypes
} from '@/store/types/notification/notificationMessage';

const initialState = {
  message: '',
};

const notificationReducer = (state = initialState, action: NotificationMessageTypes) => {
  switch (action.type) {
    case NOTIFICATION_MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

export default notificationReducer;