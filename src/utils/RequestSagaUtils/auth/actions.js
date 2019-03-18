import {
  ACTION_REFRESH_ACCESS_TOKEN,
  ACTION_REFRESH_ACCESS_TOKEN_ERROR,
  ACTION_REFRESH_ACCESS_TOKEN_SUCCESS
} from '../constants';

export const refreshAccessToken = ({ refresh_token }) => ({
  type: ACTION_REFRESH_ACCESS_TOKEN,
  payload: {
    refresh_token
  }
});

export const refreshAccessTokenSuccess = ({ access_token }) => ({
  type: ACTION_REFRESH_ACCESS_TOKEN_SUCCESS,
  payload: {
    access_token
  }
});

export const refreshAccessTokenError = () => ({
  type: ACTION_REFRESH_ACCESS_TOKEN_ERROR
});
