import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  UsersActionTypes
} from '@/store/types/users/getUsers';

const initialState = {
  data: [],
  pagination: {
    page: 0,
    limit: 0,
    total: 0,
  },
  loading: false,
  error: null,
};

const getUsersReducer = (state = initialState, action: UsersActionTypes) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        pagination: {
          page: action.payload.pagination.page,
          limit: action.payload.pagination.limit,
          total: action.payload.pagination.total,
        }

      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getUsersReducer;