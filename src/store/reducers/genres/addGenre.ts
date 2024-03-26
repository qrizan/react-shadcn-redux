import {
  AddGenreActionTypes,
  ADD_GENRE_REQUEST,
  ADD_GENRE_SUCCESS,
  ADD_GENRE_FAILURE,
} from '@/store/types/genres/addGenre';

const initialState = {
  loading: false,
  error: null,
};

const addGenreReducer = (state = initialState, action: AddGenreActionTypes) => {
  switch (action.type) {
    case ADD_GENRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_GENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ADD_GENRE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default addGenreReducer