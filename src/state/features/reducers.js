import { combineReducers } from 'redux';

import properties from './getProperties';
import _testReducer from './_testDispatch';

const reducers = combineReducers({
  properties,
  _test: _testReducer
});

export default reducers;
