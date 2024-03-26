import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAILURE,
  DashboardActionTypes
} from '@/store/types/dashboard/getDashboard';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dashboardReducer = (state = initialState, action: DashboardActionTypes) => {
  switch (action.type) {
    case GET_DASHBOARD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_DASHBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default dashboardReducer;