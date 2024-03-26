import { RootState } from '@/store/types/rootTypes';

export const selectGenres = (state: RootState) => state.genres.getGenres
