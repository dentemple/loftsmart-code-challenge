import { connect } from 'react-redux';
import { fetchProperties } from '../../../state/features/getProperties';

import UI from './PropertiesUI';

const mapState = ({ properties }) => ({ properties });

const mapDispatch = dispatch => ({
  fetchProperties: resource => {
    dispatch(fetchProperties(resource));
  }
});

export default connect(
  mapState,
  mapDispatch
)(UI);
