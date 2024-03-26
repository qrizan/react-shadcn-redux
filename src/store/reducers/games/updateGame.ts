import {
  UpdateGameActionTypes,
  UPDATE_GAME_REQUEST,
  UPDATE_GAME_SUCCESS,
  UPDATE_GAME_FAILURE
} from '@/store/types/games/updateGame';

const initialState = {
  loading: false,
  error: null,
};

const updateGameReducer = (state = initialState, action: UpdateGameActionTypes) => {
  switch (action.type) {
    case UPDATE_GAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UPDATE_GAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default updateGameReducer