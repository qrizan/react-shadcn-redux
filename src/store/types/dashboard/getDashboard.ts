export const GET_DASHBOARD_REQUEST = 'GET_DASHBOARD_REQUEST';
export const GET_DASHBOARD_SUCCESS = 'GET_DASHBOARD_SUCCESS';
export const GET_DASHBOARD_FAILURE = 'GET_DASHBOARD_FAILURE';

interface GetDashboardRequestAction {
  type: typeof GET_DASHBOARD_REQUEST;
}

interface GetDashboardDataAction {
  type: typeof GET_DASHBOARD_SUCCESS,
  payload: {
    data: string
  }
}

interface GetDashboardFailureAction {
  type: typeof GET_DASHBOARD_FAILURE;
  payload: {
    error: string | null
  };
}

export type DashboardActionTypes =
  | GetDashboardRequestAction
  | GetDashboardDataAction
  | GetDashboardFailureAction;
