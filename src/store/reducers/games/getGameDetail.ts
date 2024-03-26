import {
  GetGameDetailActionTypes,
  GET_GAME_DETAIL_REQUEST,
  GET_GAME_DETAIL_SUCCESS,
  GET_GAME_DETAIL_FAILURE
} from '@/store/types/games/getGameDetail';

const initialState = {
  loading: false,
  error: null,
  data: []
};

const getGameDetailReducer = (state = initialState, action: GetGameDetailActionTypes) => {
  switch (action.type) {
    case GET_GAME_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_GAME_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_GAME_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getGameDetailReducer