import {
  UploadImageGameActionTypes,
  UPLOAD_IMAGE_GAME_REQUEST,
  UPLOAD_IMAGE_GAME_SUCCESS,
  UPLOAD_IMAGE_GAME_FAILURE,
} from '@/store/types/games/uploadImage';

const initialState = {
  loading: false,
  error: null,
  url: ''
};

const uploadImageGameReducer = (state = initialState, action: UploadImageGameActionTypes) => {
  switch (action.type) {
    case UPLOAD_IMAGE_GAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPLOAD_IMAGE_GAME_SUCCESS:
      return {
        ...state,
        url: action.payload.url,
        loading: false,
        error: null,
      };
    case UPLOAD_IMAGE_GAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default uploadImageGameReducer