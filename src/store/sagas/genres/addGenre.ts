import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { IRequestAddGenre, IResponseBase } from '@/dtos/genres.dto';
import { ADD_GENRE_REQUEST } from '@/store/types/genres/addGenre';
import { addGenreService } from '@/services/genresService';
import { getGenresRequest, addGenreSuccess, addGenreFailure } from '@/store/actions/genres';
import { notificationMessage } from '@/store/actions/notification';

function* addGenreSaga(action: IRequestAddGenre) {
  const token: string = yield call(() => Cookies.get('token'));
  const { name } = action.payload;

  try {
    const response: IResponseBase = yield call(addGenreService, token, name);
    if (response.statusCode == 200) {
      yield put(addGenreSuccess());
      yield put(getGenresRequest());
      yield put(notificationMessage(response.message));
    }

  } catch (error) {
    if (error instanceof Error) {
      yield put(addGenreFailure(error.message));
    }
  }
}


export function* watchAddGenreRequest() {
  yield takeLatest(ADD_GENRE_REQUEST, addGenreSaga);
}

