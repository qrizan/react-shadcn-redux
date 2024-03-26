import {
  DeleteGameActionTypes,
  DELETE_GAME_REQUEST,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILURE,
} from '@/store/types/games/deleteGame';

const initialState = {
  loading: false,
  error: null,
};

const deleteGameReducer = (state = initialState, action: DeleteGameActionTypes) => {
  switch (action.type) {
    case DELETE_GAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_GAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default deleteGameReducer