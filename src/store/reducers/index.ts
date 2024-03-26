import { combineReducers } from 'redux';

import dashboardReducer from './dashboard/getDashboard';
import { getUsersReducer } from './users';
import {
  getGamesReducer,
  getDetailGameReducer,
  addGameReducer,
  updateGameReducer,
  deleteGameReducer,
  uploadImageGameReducer
} from './games';

import {
  getGenresReducer,
  addGenreReducer,
  deleteGenreReducer
} from './genres';

import notificationReducer from './notificationReducer';

import {
  LogoutTypes,
  LOGOUT_REQUEST,
} from '@/store/types/auth/logout';

const dashboardReducers = {
  getDashboard: dashboardReducer,
};

const gamesReducers = {
  getGames: getGamesReducer,
  getGameDetail: getDetailGameReducer,
  addGame: addGameReducer,
  updateGame: updateGameReducer,
  uploadImageGame: uploadImageGameReducer,
  deleteGame: deleteGameReducer,
};

const genresReducers = {
  getGenres: getGenresReducer,
  addGenre: addGenreReducer,
  deleteGenre: deleteGenreReducer
};

const usersReducers = {
  getUsers: getUsersReducer,
};

const rootReducerCombine = combineReducers({
  dashboard: combineReducers(dashboardReducers),
  games: combineReducers(gamesReducers),
  genres: combineReducers(genresReducers),
  users: combineReducers(usersReducers),
  notification: notificationReducer
});

const rootReducer = (state: object, action: LogoutTypes) => {
  if (action.type == LOGOUT_REQUEST) {
    state = {};
  }

  return rootReducerCombine(state, action);
};

export default rootReducer;