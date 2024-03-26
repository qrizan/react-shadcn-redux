export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

export type LogoutTypes = 
  | LogoutRequestAction;
