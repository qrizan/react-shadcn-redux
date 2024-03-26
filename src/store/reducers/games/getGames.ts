import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
  GetGamesActionTypes
} from '@/store/types/games/getGames';

const initialState = {
  loading: false,
  error: null,
  data: [],
  pagination: {
    page: 0,
    limit: 0,
    total: 0,
  },
};

const getGamesReducer = (state = initialState, action: GetGamesActionTypes) => {
  switch (action.type) {
    case GET_GAMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_GAMES_SUCCESS:
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
    case GET_GAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getGamesReducer