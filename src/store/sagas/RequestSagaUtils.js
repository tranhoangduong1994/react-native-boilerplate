import {
  call, put, take, race, delay
} from 'redux-saga/effects';

export const ACTION_PREPARE_ACCESS_TOKEN = 'auth/prepareAccessToken';
export const ACTION_PREPARE_ACCESS_TOKEN_DONE = 'auth/prepareAccessTokenDone';

export const ACTION_MARK_REQUEST_PENDING = 'request/pending';
export const ACTION_MARK_REQUEST_SUCCESS = 'request/success';
export const ACTION_MARK_REQUEST_CANCELLED = 'request/cancelled';
export const ACTION_MARK_REQUEST_FAILED = 'request/failed';

const markRequestPending = key => ({
  type: ACTION_MARK_REQUEST_PENDING,
  meta: { key }
});

const markRequestSuccess = key => ({
  type: ACTION_MARK_REQUEST_SUCCESS,
  meta: { key }
});

const markRequestCancelled = key => ({
  type: ACTION_MARK_REQUEST_CANCELLED,
  meta: { key }
});

const markRequestFailed = key => ({
  type: ACTION_MARK_REQUEST_FAILED,
  meta: { key }
});

export const createRequestSaga = ({
  request,
  key,
  timeout = 30000,
  cancel,
  tokenRequired = false
}) => function* requestGenerator(action) {
  let args = action.args || [];

  const callback = typeof args[args.length - 1] === 'function' ? args[args.length - 1] : null;
  if (callback) {
    args = args.slice(0, -1);
  }

  let ret = null;
  let err = null;

  const requestKey = typeof key === 'function' ? key(...args) : key;

  yield put(markRequestPending(requestKey));

  if (tokenRequired) {
    yield put({
      type: ACTION_PREPARE_ACCESS_TOKEN
    });

    const {
      payload: { token }
    } = yield take(ACTION_PREPARE_ACCESS_TOKEN_DONE);

    if (token) {
      args.unshift(token);
    } else {
      throw new Error('RequestError - token not available');
    }
  }

  try {
    if (!request) {
      throw new Error('RequestError - request not defined');
    }

    const raceOptions = {
      response: call(request, ...args),
      isTimeout: delay(timeout)
    };
    if (cancel) {
      raceOptions.cancelRet = take(cancel);
    }

    const { response, isTimeout, cancelRet } = yield race(raceOptions);
    if (isTimeout) {
      throw new Error('RequestError - timeout');
    }
    if (cancelRet) {
      yield put(markRequestCancelled(cancelRet, requestKey));
    } else {
      const { status, data } = response;
      ret = data;
      if (status < 400) {
        yield put(markRequestSuccess(requestKey));
      } else {
        throw new Error(`RequestError - ${status}`);
      }
    }
  } catch (error) {
    console.log('RequestSagaUtils error', error);
    yield put(markRequestFailed(error, requestKey));

    err = error;
  } finally {
    if (callback) {
      callback(err, ret);
    }
  }
};
