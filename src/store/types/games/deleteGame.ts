export const DELETE_GAME_REQUEST = 'DELETE_GAME_REQUEST';
export const DELETE_GAME_SUCCESS = 'DELETE_GAME_SUCCESS';
export const DELETE_GAME_FAILURE = 'DELETE_GAME_FAILURE';

interface DeleteGameRequestType {
  type: typeof DELETE_GAME_REQUEST;
}

interface DeleteGameSuccessType {
  type: typeof DELETE_GAME_SUCCESS,
  payload: {
    data: object,
  }
}

interface DeleteGamesFailureType {
  type: typeof DELETE_GAME_FAILURE;
  payload: {
    error: string | null
  };
}

export type DeleteGameActionTypes =
  | DeleteGameRequestType
  | DeleteGameSuccessType
  | DeleteGamesFailureType;