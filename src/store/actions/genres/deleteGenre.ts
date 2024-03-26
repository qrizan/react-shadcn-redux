import {
  DELETE_GENRE_REQUEST,
  DELETE_GENRE_SUCCESS,
  DELETE_GENRE_FAILURE
} from '@/store/types/genres/deleteGenre';
import { IRequestDeleteGenre } from '@/dtos/genres.dto';

export const deleteGenreRequest = (id: string): IRequestDeleteGenre => ({
  type: DELETE_GENRE_REQUEST,
  payload: {
    id
  },
});

export const deleteGenreSuccess = () => ({
  type: DELETE_GENRE_SUCCESS,
});

export const deleteGenreFailure = (error: string) => ({
  type: DELETE_GENRE_FAILURE,
  payload: { error },
});