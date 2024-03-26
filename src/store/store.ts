import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '@/store/reducers';
import rootSaga from '@/store/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      ...middleware
    )
  )
);

sagaMiddleware.run(rootSaga);
export default store;