import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IResponseBase, IRequestDeleteGame } from '@/dtos/games.dto';
import { DELETE_GAME_REQUEST } from '@/store/types/games/deleteGame';
import { deleteGameService } from '@/services/gamesService';
import { deleteGameSuccess, getGamesRequest, deleteGameFailure } from '@/store/actions/games';
import { notificationMessage } from '@/store/actions/notification';

function* deleteGameSaga(action: IRequestDeleteGame) {
  const token: string = yield call(() => Cookies.get('token'));
  const { id } = action.payload;

  try {
    const data: IResponseBase = yield call(deleteGameService, token, id);
    if (data.statusCode == 200) {
      yield put(deleteGameSuccess());
      yield put(getGamesRequest());
      yield put(notificationMessage(data.message));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteGameFailure(error.message));
    }
  }
}

export function* watchDeleteGameRequest() {
  yield takeLatest(DELETE_GAME_REQUEST, deleteGameSaga);
}
