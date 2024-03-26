export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}

interface GetUsersDataAction {
  type: typeof GET_USERS_SUCCESS,
  payload: {
    data: string,
    pagination: {
      page: number,
      limit: number,
      total: number,
    }
  }
}

interface GetUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
  payload: {
    error: string | null
  };
}

export type UsersActionTypes =
  | GetUsersRequestAction
  | GetUsersDataAction
  | GetUsersFailureAction;