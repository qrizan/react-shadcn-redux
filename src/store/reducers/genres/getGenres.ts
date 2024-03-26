import {
  GET_GENRES_REQUEST,
  GET_GENRES_SUCCESS,
  GET_GENRES_FAILURE,
  GetGenresActionTypes
} from '@/store/types/genres/getGenres';

const initialState = {
  loading: false,
  error: null,  
  data: [],
};

const getGenresReducer = (state = initialState, action: GetGenresActionTypes) => {
  switch (action.type) {
    case GET_GENRES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case GET_GENRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getGenresReducer