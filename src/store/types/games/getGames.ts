export const GET_GAMES_REQUEST = 'GET_GAMES_REQUEST';
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS';
export const GET_GAMES_FAILURE = 'GET_GAMES_FAILURE';

interface GetGamesRequestAction {
  type: typeof GET_GAMES_REQUEST;
}

interface GetGamesDataAction {
  type: typeof GET_GAMES_SUCCESS,
  payload: {
    data: object,
    pagination: {
      page: number,
      limit: number,
      total: number,
    }
  }
}

interface GetGamesFailureAction {
  type: typeof GET_GAMES_FAILURE;
  payload: {
    error: string | null
  };
}

export type GetGamesActionTypes =
  | GetGamesRequestAction
  | GetGamesDataAction
  | GetGamesFailureAction