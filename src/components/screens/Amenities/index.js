import { connect } from 'react-redux';

import UI from './UI';
import { updateSelectedProperty } from '../../../state/features/selectedProperty';
import { getAmenitiesFromState } from '../../../state/features/getAmenities';

const mapState = state => ({
  amenities: getAmenitiesFromState(state)
});

const mapDispatch = dispatch => ({
  populateProperty: slug => dispatch(updateSelectedProperty(slug))
});

export default connect(
  mapState,
  mapDispatch
)(UI);
