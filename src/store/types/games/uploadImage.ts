export const UPLOAD_IMAGE_GAME_REQUEST = 'UPLOAD_IMAGE_GAME_REQUEST';
export const UPLOAD_IMAGE_GAME_SUCCESS = 'UPLOAD_IMAGE_GAME_SUCCESS';
export const UPLOAD_IMAGE_GAME_FAILURE = 'UPLOAD_IMAGE_GAME_FAILURE';

interface UploadImageGameRequestType {
  type: typeof UPLOAD_IMAGE_GAME_REQUEST;
}

interface UploadImageGameSuccessType {
  type: typeof UPLOAD_IMAGE_GAME_SUCCESS,
  payload: {
    url: string;
  }
}

interface UploadImageGameFailureType {
  type: typeof UPLOAD_IMAGE_GAME_FAILURE;
  payload: {
    error: string | null
  };
}

export type UploadImageGameActionTypes =
  | UploadImageGameRequestType
  | UploadImageGameSuccessType
  | UploadImageGameFailureType;