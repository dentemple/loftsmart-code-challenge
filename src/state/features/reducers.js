import { combineReducers } from 'redux';

import properties from './getProperties';
import property from './selectedProperty';

const reducers = combineReducers({
  property,
  properties
});

export default reducers;
