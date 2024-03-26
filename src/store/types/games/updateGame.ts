export const UPDATE_GAME_REQUEST = 'UPDATE_GAME_REQUEST';
export const UPDATE_GAME_SUCCESS = 'UPDATE_GAME_SUCCESS';
export const UPDATE_GAME_FAILURE = 'UPDATE_GAME_FAILURE';

interface UpdateGameRequestType {
  type: typeof UPDATE_GAME_REQUEST;
}

interface UpdateGameSuccessType {
  type: typeof UPDATE_GAME_SUCCESS,
  payload: {
    data: object,
  }
}

interface UpdateGameFailureType {
  type: typeof UPDATE_GAME_FAILURE;
  payload: {
    error: string | null
  };
}

export type UpdateGameActionTypes =
  | UpdateGameRequestType
  | UpdateGameSuccessType
  | UpdateGameFailureType;
