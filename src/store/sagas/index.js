import { all, fork } from 'redux-saga/effects';
import post from './post';

const rootSaga = function* () {
  yield all([...post.map(watcher => fork(watcher))]);
};

export default rootSaga;
