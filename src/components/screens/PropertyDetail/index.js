import { connect } from 'react-redux';

import UI from './UI';
import {
  getSelectedPropertyFromState,
  updateSelectedProperty
} from '../../../state/features/selectedProperty';

const mapState = state => ({
  property: getSelectedPropertyFromState(state)
});

const mapDispatch = dispatch => ({
  populateProperty: slug => dispatch(updateSelectedProperty(slug))
});

export default connect(
  mapState,
  mapDispatch
)(UI);
