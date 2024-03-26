export const ADD_GAME_REQUEST = 'ADD_GAME_REQUEST';
export const ADD_GAME_SUCCESS = 'ADD_GAME_SUCCESS';
export const ADD_GAME_FAILURE = 'ADD_GAME_FAILURE';

interface AddGameRequestType {
  type: typeof ADD_GAME_REQUEST;
}

interface AddGameSuccessType {
  type: typeof ADD_GAME_SUCCESS,
  payload: {
    data: object,
  }
}

interface AddGameFailureType {
  type: typeof ADD_GAME_FAILURE;
  payload: {
    error: string | null
  };
}

export type AddGameActionTypes =
  | AddGameRequestType
  | AddGameSuccessType
  | AddGameFailureType;

