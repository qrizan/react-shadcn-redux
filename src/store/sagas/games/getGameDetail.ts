import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IResponseGameDetail, IRequestGetGameDetail } from '@/dtos/games.dto';
import { GET_GAME_DETAIL_REQUEST } from '@/store/types/games/getGameDetail';
import { getGameDetailService } from '@/services/gamesService';
import { getGameDetailSuccess, getGameDetailFailure } from '@/store/actions/games';

function* getGameDetailSaga(action: IRequestGetGameDetail) {
  try {
    const token: string = yield call(() => Cookies.get('token'));
    const id = action.payload.id;

    const response: IResponseGameDetail = yield call(getGameDetailService, token, id);
    yield put(getGameDetailSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getGameDetailFailure(error.message));
    }
  }
}

export function* watchGetGameDetailRequest() {
  yield takeLatest(GET_GAME_DETAIL_REQUEST, getGameDetailSaga);
}
