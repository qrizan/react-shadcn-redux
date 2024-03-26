import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { GET_GENRES_REQUEST } from '@/store/types/genres/getGenres';
import { getGenresService } from '@/services/genresService';
import { getGenresSuccess, getGenresFailure } from '@/store/actions/genres/getGenres';
import { IResponseGenres } from '@/dtos/genres.dto';

function* getGenresSaga() {
  try {
    const token: string = yield call(() => Cookies.get('token'));

    const response: IResponseGenres = yield call(getGenresService, token);
    yield put(getGenresSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getGenresFailure(error.message));
    }
  }
}

export function* watchGetGenresRequest() {
  yield takeLatest(GET_GENRES_REQUEST, getGenresSaga);
}
