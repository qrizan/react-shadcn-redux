import { call, put, takeLatest } from 'redux-saga/effects';

import { getUsersService } from '@/services/usersService';
import {
  getUsersSuccess,
  getUsersFailure,
} from '@/store/actions/users/getUsers';

import { GET_USERS_REQUEST } from '@/store/types/users/getUsers';

import { IResponseUsers, IGetUsersRequest } from '@/dtos/users.dto';
import Cookies from 'js-cookie';

function* getUsersSaga(action: IGetUsersRequest) {
  try {
    const token: string = yield call(() => Cookies.get('token'));
    const page = action.payload.page;
    const keyword = action.payload.keyword;

    const response: IResponseUsers = yield call(getUsersService, token, page, keyword);
    yield put(getUsersSuccess(response.data, response.pagination));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getUsersFailure(error.message));
    }
  }
}

export function* watchGetUsersRequest() {
  yield takeLatest(GET_USERS_REQUEST, getUsersSaga);
}
