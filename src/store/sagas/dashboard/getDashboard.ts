import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { getDashboardService } from '@/services/dashboardService';
import {
  getDashboardSuccess,
  getDashboardFailure,
} from '@/store/actions/dashboard/getDashboard';

import { GET_DASHBOARD_REQUEST } from '@/store/types/dashboard/getDashboard'
import { IResponseDashboard } from '@/dtos/dashboard.dto';

function* getDashboardsSaga() {
  try {
    const token: string = yield call(() => Cookies.get('token'));

    const response: IResponseDashboard = yield call(getDashboardService, token);
    yield put(getDashboardSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getDashboardFailure(error.message));
    }
  }
}

export function* watchGetDashboardRequest() {
  yield takeLatest(GET_DASHBOARD_REQUEST, getDashboardsSaga);
}
