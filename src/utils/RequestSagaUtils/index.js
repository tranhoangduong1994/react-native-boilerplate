import { all, fork } from 'redux-saga/effects';
import { createRequestSaga } from './RequestSagaCreator';
import authSaga from './auth/saga';
import tokenSaga from './token/saga';
import tokenReducer from './token/reducer';
import { getAccessToken } from './token/selectors';
import { store } from '../../App';

const callSagaRequest = (sagaRequestFunction, ...params) => new Promise((resolve, reject) => {
  console.log('callSagaRequest', sagaRequestFunction, ...params);
  store.dispatch(
    sagaRequestFunction(...params, (err, ret) => {
      if (!err) {
        resolve(ret);
      }
      reject(err);
    })
  );
});

const requestUtilsSaga = function* generator() {
  yield all([
    ...authSaga.map(watcher => fork(watcher)),
    ...tokenSaga.map(watcher => fork(watcher))
  ]);
};

export {
  createRequestSaga, callSagaRequest, requestUtilsSaga, tokenReducer, getAccessToken
};
