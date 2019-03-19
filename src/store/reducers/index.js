import { combineReducers } from 'redux';
import common from './common';
import { tokenReducer } from '../../utils/RequestSagaUtils';

const reducers = combineReducers({
  common,
  tokenReducer
});

export default reducers;
