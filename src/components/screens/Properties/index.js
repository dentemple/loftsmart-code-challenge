import { connect } from 'react-redux';

import UI from './PropertiesUI';
import {
  fetchProperties,
  getPropertiesFromState
} from '../../../state/features/getProperties';

const mapState = state => getPropertiesFromState(state);

const mapDispatch = dispatch => ({
  fetchProperties: resource => {
    dispatch(fetchProperties(resource));
  }
});

export default connect(
  mapState,
  mapDispatch
)(UI);
