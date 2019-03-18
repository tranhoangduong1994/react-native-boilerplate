import {
  select, all, put, take, race, takeLatest
} from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import * as AuthActions from '../auth/actions';
import * as TokenActions from './actions';
import {
  ACTION_PREPARE_ACCESS_TOKEN,
  ACTION_REFRESH_ACCESS_TOKEN_ERROR,
  ACTION_REFRESH_ACCESS_TOKEN_SUCCESS
} from '../constants';

function* requestPrepareAccessToken() {
  let { access_token } = yield select(_ => _.token);

  let shouldRefreshToken = true;

  if (access_token) {
    const now = Date.now();
    const result = jwtDecode(access_token);
    const { exp } = result;
    if (now <= exp) {
      shouldRefreshToken = false;
    }
  }

  if (!shouldRefreshToken) {
    yield put(TokenActions.prepareAccessTokenSuccess({ access_token }));
  } else {
    const { refresh_token } = yield select(_ => _.token);

    if (!refresh_token) {
      yield put(TokenActions.prepareAccessTokenError());
    } else {
      yield put(AuthActions.refreshAccessToken({ refresh_token }));

      const loginRaceOptions = {
        takeSuccess: take(ACTION_REFRESH_ACCESS_TOKEN_SUCCESS),
        takeError: take(ACTION_REFRESH_ACCESS_TOKEN_ERROR)
      };

      const { takeSuccess } = yield race(loginRaceOptions);
      if (takeSuccess) {
        // eslint-disable-next-line prefer-destructuring
        access_token = takeSuccess.access_token;

        yield put(TokenActions.updateAccessToken({ access_token }));
        yield put(TokenActions.prepareAccessTokenSuccess({ access_token }));
      } else {
        yield put(TokenActions.prepareAccessTokenError());
      }
    }
  }
}

export default [
  function* tokenWatcher() {
    yield all([takeLatest(ACTION_PREPARE_ACCESS_TOKEN, requestPrepareAccessToken)]);
  }
];
