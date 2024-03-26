import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IRequestAddGame, IResponseBase } from '@/dtos/games.dto';
import { ADD_GAME_REQUEST } from '@/store/types/games/addGame';
import { addGameService } from '@/services/gamesService';
import { addGameSuccess, addGameFailure } from '@/store/actions/games';
import { notificationMessage } from '@/store/actions/notification';

function* addGameSaga(action: IRequestAddGame) {
  try {
    const token: string = yield call(() => Cookies.get('token'));
    const { data } = action.payload;

    const response: IResponseBase = yield call(addGameService, token, data);
    if (response.statusCode == 200) {
      yield put(addGameSuccess());
      yield put(notificationMessage(response.message));
    }

  } catch (error) {
    if (error instanceof Error) {
      yield put(addGameFailure(error.message));
    }
  }
}

export function* watchAddGameRequest() {
  yield takeLatest(ADD_GAME_REQUEST, addGameSaga);
}
