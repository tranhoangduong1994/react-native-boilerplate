import { all, takeLatest } from 'redux-saga/effects';
import { createRequestSaga } from '..';
import AuthAPIs from './APIs';
import { ACTION_REFRESH_ACCESS_TOKEN } from '../constants';
import { refreshAccessTokenSuccess, refreshAccessTokenError } from './actions';

const requestRefreshAccessToken = createRequestSaga({
  request: AuthAPIs.login,
  key: ACTION_REFRESH_ACCESS_TOKEN,
  onSuccessActionCreators: [refreshAccessTokenSuccess],
  onErrorActionCreators: [refreshAccessTokenError]
});

export default [
  function* authWatcher() {
    yield all([takeLatest(ACTION_REFRESH_ACCESS_TOKEN, requestRefreshAccessToken)]);
  }
];
