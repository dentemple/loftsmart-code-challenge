import { createSelector } from 'reselect';

import { getSelectedPropertyFromState } from '../selectedProperty';

/* selectors */
export const getAmenitiesFromState = createSelector(
  [getSelectedPropertyFromState],
  property => {
    if (!property) {
      return null;
    }

    return property.amenities;
  }
);
