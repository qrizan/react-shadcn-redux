import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IRequestUpdateGame, IResponseBase } from '@/dtos/games.dto';
import { UPDATE_GAME_REQUEST } from '@/store/types/games/updateGame';
import { updateGameService } from '@/services/gamesService';
import { updateGameSuccess, updateGameFailure } from '@/store/actions/games';
import { notificationMessage } from '@/store/actions/notification';

function* updateGameSaga(action: IRequestUpdateGame) {
  try {
    const token: string = yield call(() => Cookies.get('token'));
    const { id, data } = action.payload;

    const response: IResponseBase = yield call(updateGameService, token, id, data);
    if (response.statusCode == 200) {
      yield put(updateGameSuccess());
      yield put(notificationMessage(response.message));
    }

  } catch (error) {
    if (error instanceof Error) {
      yield put(updateGameFailure(error.message));
    }
  }
}

export function* watchUpdateGameRequest() {
  yield takeLatest(UPDATE_GAME_REQUEST, updateGameSaga);
}
