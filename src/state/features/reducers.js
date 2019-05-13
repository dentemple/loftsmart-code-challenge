import { combineReducers } from 'redux';

import _testDispatchReducer from './_testDispatch';

const reducers = combineReducers({
  _test: _testDispatchReducer
});

export default reducers;
