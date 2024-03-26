import {
  AddGameActionTypes,
  ADD_GAME_REQUEST,
  ADD_GAME_SUCCESS,
  ADD_GAME_FAILURE,
} from '@/store/types/games/addGame';

const initialState = {
  loading: false,
  error: null,
};

const addGameReducer = (state = initialState, action: AddGameActionTypes) => {
  switch (action.type) {
    case ADD_GAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ADD_GAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default addGameReducer