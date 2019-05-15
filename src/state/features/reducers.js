import { combineReducers } from 'redux';

import properties from './getProperties';
import property from './selectedProperty';
import _testReducer from './_testDispatch';

const reducers = combineReducers({
  property,
  properties,
  _test: _testReducer
});

export default reducers;
