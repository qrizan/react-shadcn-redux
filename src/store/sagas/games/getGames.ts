import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IResponseGames, IRequestGetGames } from '@/dtos/games.dto';
import { GET_GAMES_REQUEST } from '@/store/types/games/getGames';
import { getGamesService } from '@/services/gamesService';
import { getGamesSuccess, getGamesFailure } from '@/store/actions/games';

function* getGamesSaga(action: IRequestGetGames) {
  try {
    const token: string = yield call(() => Cookies.get('token'));
    const page = action.payload.page;
    const keyword = action.payload.keyword;

    const response: IResponseGames = yield call(getGamesService, token, page, keyword);
    yield put(getGamesSuccess(response.data, response.pagination));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getGamesFailure(error.message));
    }
  }
}

export function* watchGetGamesRequest() {
  yield takeLatest(GET_GAMES_REQUEST, getGamesSaga);
}
