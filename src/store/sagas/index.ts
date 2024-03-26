import { all } from 'redux-saga/effects';
import { watchGetDashboardRequest } from './dashboard';
import { 
  watchGetGamesRequest,
  watchGetGameDetailRequest,
  watchAddGameRequest,
  watchDeleteGameRequest,
  watchUpdateGameRequest,
  watchUploadImageGameRequest
} from './games';

import { 
  watchGetGenresRequest, 
  watchAddGenreRequest, 
  watchDeleteGenreRequest 
} from './genres';

import { watchGetUsersRequest } from './users';

function* rootSaga() {
  const sagaWatchers = [
    watchGetGamesRequest,
    watchGetGameDetailRequest,
    watchAddGameRequest,
    watchDeleteGameRequest,
    watchUpdateGameRequest,
    watchUploadImageGameRequest,    
    watchGetDashboardRequest,
    watchGetUsersRequest,
    watchGetGenresRequest,
    watchAddGenreRequest,
    watchDeleteGenreRequest,
  ];

  yield all(sagaWatchers.map(sagaWatcher => sagaWatcher()));
}

export default rootSaga;