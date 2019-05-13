import { combineReducers } from 'redux';

import properties from './getProperties';
import chosenProperty from './chooseProperty';
import _testReducer from './_testDispatch';

const reducers = combineReducers({
  chosenProperty,
  properties,
  _test: _testReducer
});

export default reducers;
