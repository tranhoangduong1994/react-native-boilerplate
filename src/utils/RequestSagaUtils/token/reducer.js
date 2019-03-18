import {
  ACTION_UPDATE_ACCESS_TOKEN,
  ACTION_REMOVE_ACCESS_TOKEN,
  ACTION_UPDATE_REFRESH_TOKEN,
  ACTION_REMOVE_REFRESH_TOKEN
} from '../constants';

const defaultState = {
  refresh_token: null,
  access_token: null
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  if (type === ACTION_UPDATE_ACCESS_TOKEN) {
    const { access_token } = payload;
    return {
      ...state,
      access_token
    };
  }
  if (type === ACTION_REMOVE_ACCESS_TOKEN) {
    return {
      ...state,
      access_token: null
    };
  }
  if (type === ACTION_UPDATE_REFRESH_TOKEN) {
    const { refresh_token } = payload;
    return {
      ...state,
      refresh_token
    };
  }
  if (type === ACTION_REMOVE_REFRESH_TOKEN) {
    return {
      ...state,
      refresh_token: null
    };
  }
  return state;
};
