import {
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE
} from '@/store/types/genres/getGenres';
import { IGenres, IRequestBase } from '@/dtos/genres.dto';

export const getGenresRequest = (): IRequestBase => ({
  type: GET_GENRES_REQUEST,
});

export const getGenresSuccess = (data: IGenres[]) => ({
  type: GET_GENRES_SUCCESS,
  payload: {
    data,
  }
});

export const getGenresFailure = (error: string) => ({
  type: GET_GENRES_FAILURE,
  payload: { error },
});
