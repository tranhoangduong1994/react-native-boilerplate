import {
  ACTION_UPDATE_ACCESS_TOKEN,
  ACTION_PREPARE_ACCESS_TOKEN,
  ACTION_PREPARE_ACCESS_TOKEN_SUCCESS,
  ACTION_PREPARE_ACCESS_TOKEN_ERROR,
  ACTION_UPDATE_REFRESH_TOKEN,
  ACTION_REMOVE_ACCESS_TOKEN,
  ACTION_REMOVE_REFRESH_TOKEN
} from '../constants';

export const prepareAccessToken = () => ({ type: ACTION_PREPARE_ACCESS_TOKEN });

export const prepareAccessTokenSuccess = ({ access_token }) => ({
  type: ACTION_PREPARE_ACCESS_TOKEN_SUCCESS,
  payload: {
    access_token
  }
});

export const prepareAccessTokenError = () => ({
  type: ACTION_PREPARE_ACCESS_TOKEN_ERROR
});

export const updateAccessToken = ({ access_token }) => ({
  type: ACTION_UPDATE_ACCESS_TOKEN,
  payload: {
    access_token
  }
});

export const removeAccessToken = () => ({ type: ACTION_REMOVE_ACCESS_TOKEN });

export const updateRefreshToken = ({ refresh_token }) => ({
  type: ACTION_UPDATE_REFRESH_TOKEN,
  payload: {
    refresh_token
  }
});

export const removeRefreshToken = () => ({ type: ACTION_REMOVE_REFRESH_TOKEN });
