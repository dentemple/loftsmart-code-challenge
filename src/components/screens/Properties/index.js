import { connect } from 'react-redux';

import Properties from './UI';
import {
  getPropertiesFromState,
  populateProperties
} from '../../../state/features/getProperties';

const mapState = state => getPropertiesFromState(state);

const mapDispatch = dispatch => ({
  populateProperties: () => {
    dispatch(populateProperties());
  }
});

export default connect(
  mapState,
  mapDispatch
)(Properties);
