import { RootState } from '@/store/types/rootTypes';

export const selectDashboard = (state: RootState) => state.dashboard.getDashboard;