import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import common from './common';

const reducers = combineReducers({
  form,
  common
});

export default reducers;
