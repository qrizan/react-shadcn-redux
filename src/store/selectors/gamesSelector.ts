import { RootState } from '@/store/types/rootTypes';

export const selectGames = (state: RootState) => state.games.getGames;
export const selectGameDetail = (state: RootState) => state.games.getGameDetail;
export const selectImageGameUrl = (state: RootState) => state.games.uploadImageGame.url;
