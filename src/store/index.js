import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import logger from './logger';

const sagaMiddlewares = createSagaMiddleware();
const middlewares = [sagaMiddlewares];

if (__DEV__) {
  !window.devToolsExtension && middlewares.push(logger);
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
  GLOBAL.FormData = GLOBAL.originalFormData;
}

export default (configStore = () => new Promise((resolve) => {
  const enhancer = [applyMiddleware(...middlewares)];
  window.devToolsExtension && enhancer.push(window.devToolsExtension());

  let persistedReducer = null;
  persistedReducer = persistReducer(
    {
      key: 'confidentialProject',
      storage: AsyncStorage,
      whitelist: ['']
    },
    reducers
  );

  const store = createStore(persistedReducer, undefined, compose(...enhancer));
  sagaMiddlewares.run(rootSaga);

  persistStore(store, null, () => {
    resolve(store);
  });
}));
