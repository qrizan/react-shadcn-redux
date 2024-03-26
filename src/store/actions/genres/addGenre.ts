import {
  ADD_GENRE_REQUEST,
  ADD_GENRE_SUCCESS,
  ADD_GENRE_FAILURE
} from '@/store/types/genres/addGenre';
import { IRequestAddGenre } from '@/dtos/genres.dto';

export const addGenreRequest = (name: string): IRequestAddGenre => ({
  type: ADD_GENRE_REQUEST,
  payload: {
    name
  },
});

export const addGenreSuccess = () => ({
  type: ADD_GENRE_SUCCESS,
});

export const addGenreFailure = (error: string) => ({
  type: ADD_GENRE_FAILURE,
  payload: { error },
});
