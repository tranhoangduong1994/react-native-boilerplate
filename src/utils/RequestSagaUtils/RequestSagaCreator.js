import {
  call, put, take, race, delay
} from 'redux-saga/effects';
import {
  ACTION_MARK_REQUEST_PENDING,
  ACTION_MARK_REQUEST_SUCCESS,
  ACTION_MARK_REQUEST_CANCELLED,
  ACTION_MARK_REQUEST_FAILED,
  ACTION_PREPARE_ACCESS_TOKEN,
  ACTION_PREPARE_ACCESS_TOKEN_SUCCESS,
  ACTION_PREPARE_ACCESS_TOKEN_ERROR
} from './constants';

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

function* activateAllActionCreators(actionCreators, ...params) {
  for (const actionCreator of actionCreators) {
    yield put(actionCreator(...params));
  }
}

export const createRequestSaga = ({
  request,
  key,
  timeout = 30000,
  cancel,
  tokenRequired = false,
  onStartActionCreators = [],
  onStopActionCreators = [],
  onSuccessActionCreators = [],
  onErrorActionCreators = [],
  onCancelActionCreators = []
}) => function* requestGenerator(action) {
  let args = action.args || [];

  const callback = typeof args[args.length - 1] === 'function' ? args[args.length - 1] : null;
  if (callback) {
    args = args.slice(0, -1);
  }

  let ret = null;
  let err = null;

  const requestKey = typeof key === 'function' ? key(...args) : key;
  activateAllActionCreators(onStartActionCreators);

  yield put(markRequestPending(requestKey));

  try {
    if (tokenRequired) {
      yield put({
        type: ACTION_PREPARE_ACCESS_TOKEN
      });

      const prepareAccessTokenRaceOptions = {
        takeSuccess: take(ACTION_PREPARE_ACCESS_TOKEN_SUCCESS),
        takeError: take(ACTION_PREPARE_ACCESS_TOKEN_ERROR)
      };

      const { takeSuccess, takeError } = yield race(prepareAccessTokenRaceOptions);

      if (takeError) {
        throw new Error('RequestError - cannot get access token');
      }

      const { access_token } = takeSuccess;
      args.unshift(access_token);
    }

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
      activateAllActionCreators(onCancelActionCreators, cancelRet, requestKey);
      yield put(markRequestCancelled(cancelRet, requestKey));

      throw new Error('RequestError - cancelled');
    }

    const { status, data } = response;
    ret = data;
    if (status >= 400) {
      throw new Error(`RequestError - ${status}`);
    }

    activateAllActionCreators(onSuccessActionCreators, data, action);
    yield put(markRequestSuccess(requestKey));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('RequestSagaUtils error', error);
    activateAllActionCreators(onErrorActionCreators);

    yield put(markRequestFailed(error, requestKey));

    err = error;
  } finally {
    if (callback) {
      activateAllActionCreators(onStopActionCreators);
      callback(err, ret);
    }
  }
};
