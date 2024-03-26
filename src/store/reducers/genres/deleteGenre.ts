import {
  DeleteGenreActionTypes,    
  DELETE_GENRE_REQUEST,
  DELETE_GENRE_SUCCESS,
  DELETE_GENRE_FAILURE,
} from '@/store/types/genres/deleteGenre';

const initialState = {
  loading: false,
  error: null,
};

const deleteGenreReducer = (state = initialState, action: DeleteGenreActionTypes) => {
  switch (action.type) {
    case DELETE_GENRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_GENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_GENRE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default deleteGenreReducer