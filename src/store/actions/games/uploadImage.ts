import {
  UPLOAD_IMAGE_GAME_REQUEST,
  UPLOAD_IMAGE_GAME_SUCCESS,
  UPLOAD_IMAGE_GAME_FAILURE,
} from '@/store/types/games/uploadImage';
import { IRequestUploadImageGame } from '@/dtos/games.dto';

export const uploadImageGameRequest = (formData: object): IRequestUploadImageGame => ({
  type: UPLOAD_IMAGE_GAME_REQUEST,
  payload: {
    formData
  },
});

export const uploadImageGameSuccess = (url: string) => ({
  type: UPLOAD_IMAGE_GAME_SUCCESS,
  payload: {
    url
  },
});

export const uploadImageGameFailure = (error: string) => ({
  type: UPLOAD_IMAGE_GAME_FAILURE,
  payload: { error },
});
