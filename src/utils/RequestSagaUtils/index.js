import { all, fork } from 'redux-saga/effects';
import { createRequestSaga } from './RequestSagaCreator';
import authSaga from './auth/saga';
import tokenSaga from './token/saga';
import tokenReducer from './token/reducer';
import { getAccessToken } from './token/selectors';

const requestUtilsSaga = function* generator() {
  yield all([
    ...authSaga.map(watcher => fork(watcher)),
    ...tokenSaga.map(watcher => fork(watcher))
  ]);
};

export {
  createRequestSaga, requestUtilsSaga, tokenReducer, getAccessToken
};
