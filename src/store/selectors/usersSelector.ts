import { RootState } from '@/store/types/rootTypes';

export const selectUsers = (state: RootState) => state.users.getUsers;
