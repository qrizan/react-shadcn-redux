import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IResponseBase, IRequestDeleteGenre } from '@/dtos/genres.dto';
import { DELETE_GENRE_REQUEST } from '@/store/types/genres/deleteGenre';
import { deleteGenreService } from '@/services/genresService';
import { deleteGenreSuccess, getGenresRequest, deleteGenreFailure } from '@/store/actions/genres';
import { notificationMessage } from '@/store/actions/notification';

function* deleteGenreSaga(action: IRequestDeleteGenre) {
  const token: string = yield call(() => Cookies.get('token'));
  const { id } = action.payload;

  try {
    const data: IResponseBase = yield call(deleteGenreService, token, id);
    if (data.statusCode == 200) {
      yield put(deleteGenreSuccess());
      yield put(getGenresRequest());
      yield put(notificationMessage(data.message));
    }

  } catch (error) {
    if (error instanceof Error) {
      yield put(deleteGenreFailure(error.message));
    }
  }
}

export function* watchDeleteGenreRequest() {
  yield takeLatest(DELETE_GENRE_REQUEST, deleteGenreSaga);
}
