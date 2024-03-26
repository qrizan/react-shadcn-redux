import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IRequestUploadImageGame, IResponseUploadImage } from '@/dtos/games.dto';
import { UPLOAD_IMAGE_GAME_REQUEST } from '@/store/types/games/uploadImage';
import { uplaodImageGameService } from '@/services/gamesService';
import { uploadImageGameSuccess, uploadImageGameFailure } from '@/store/actions/games';
import { notificationMessage } from '@/store/actions/notification';

function* uploadImageGameSaga(action: IRequestUploadImageGame) {
  try {
    const { formData } = action.payload;
    const token: string = yield call(() => Cookies.get('token'));

    const response: IResponseUploadImage = yield call(uplaodImageGameService, token, formData);
    if (response.url.length > 0) {
      yield put(uploadImageGameSuccess(response.url));
      yield put(notificationMessage('Successfully upload image'));
    }

  } catch (error) {
    if (error instanceof Error) {
      yield put(uploadImageGameFailure(error.message));
    }
  }
}

export function* watchUploadImageGameRequest() {
  yield takeLatest(UPLOAD_IMAGE_GAME_REQUEST, uploadImageGameSaga);
}
