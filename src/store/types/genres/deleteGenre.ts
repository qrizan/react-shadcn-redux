export const DELETE_GENRE_REQUEST = 'DELETE_GENRE_REQUEST';
export const DELETE_GENRE_SUCCESS = 'DELETE_GENRE_SUCCESS';
export const DELETE_GENRE_FAILURE = 'DELETE_GENRE_FAILURE';

interface DeleteGenreRequestType {
  type: typeof DELETE_GENRE_REQUEST;
}

interface DeleteGenreSuccessType {
  type: typeof DELETE_GENRE_SUCCESS,
  payload: {
    data: string,
  }
}

interface DeleteGenresFailureType {
  type: typeof DELETE_GENRE_FAILURE;
  payload: {
    error: string | null
  };
}

export type DeleteGenreActionTypes =
  | DeleteGenreRequestType
  | DeleteGenreSuccessType
  | DeleteGenresFailureType