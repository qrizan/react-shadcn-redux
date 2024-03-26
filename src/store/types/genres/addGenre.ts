export const ADD_GENRE_REQUEST = 'ADD_GENRE_REQUEST';
export const ADD_GENRE_SUCCESS = 'ADD_GENRE_SUCCESS';
export const ADD_GENRE_FAILURE = 'ADD_GENRE_FAILURE';

interface AddGenreRequestType {
  type: typeof ADD_GENRE_REQUEST;
}

interface AddGenreSuccessType {
  type: typeof ADD_GENRE_SUCCESS,
  payload: {
    data: string,
  }
}

interface AddGenresFailureType {
  type: typeof ADD_GENRE_FAILURE;
  payload: {
    error: string | null
  };
}

export type AddGenreActionTypes =
  | AddGenreRequestType
  | AddGenreSuccessType
  | AddGenresFailureType;