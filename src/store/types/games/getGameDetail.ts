export const GET_GAME_DETAIL_REQUEST = 'GET_GAME_DETAIL_REQUEST';
export const GET_GAME_DETAIL_SUCCESS = 'GET_GAME_DETAIL_SUCCESS';
export const GET_GAME_DETAIL_FAILURE = 'GET_GAME_DETAIL_FAILURE';

interface GetGameDetailRequestAction {
  type: typeof GET_GAME_DETAIL_REQUEST;
}

interface GetGameDetailDataAction {
  type: typeof GET_GAME_DETAIL_SUCCESS,
  payload: {
    data: object,
  }
}

interface GetGameDetailFailureAction {
  type: typeof GET_GAME_DETAIL_FAILURE;
  payload: {
    error: string | null
  };
}

export type GetGameDetailActionTypes =
  | GetGameDetailRequestAction
  | GetGameDetailDataAction
  | GetGameDetailFailureAction;
