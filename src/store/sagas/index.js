import { all, fork } from 'redux-saga/effects';
import post from './post';
import { requestUtilsSaga } from '../../utils/RequestSagaUtils';

const rootSaga = function* rootGenerator() {
  yield all([...post.map(watcher => fork(watcher)), requestUtilsSaga]);
};

export default rootSaga;
