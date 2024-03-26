import { RootState } from '@/store/types/rootTypes';

export const selectNotification = (state: RootState) => state.notification.message
