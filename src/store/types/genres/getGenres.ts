export const GET_GENRES_REQUEST = 'GET_GENRES_REQUEST';
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';
export const GET_GENRES_FAILURE = 'GET_GENRES_FAILURE';

interface GetGenresRequestType {
  type: typeof GET_GENRES_REQUEST;
}

interface GetGenresDataType {
  type: typeof GET_GENRES_SUCCESS,
  payload: {
    data: string,
  }
}

interface GetGenresFailureType {
  type: typeof GET_GENRES_FAILURE;
  payload: {
    error: string | null
  };
}

export type GetGenresActionTypes =
  | GetGenresRequestType
  | GetGenresDataType
  | GetGenresFailureType