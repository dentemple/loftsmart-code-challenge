import { createSelector } from 'reselect';

import { getChosenPropertyFromState } from '../chooseProperty';
import { getPropertiesFromState } from '../getProperties';

/* selectors */
export const getPropertyFromState = createSelector(
  [getPropertiesFromState, getChosenPropertyFromState],
  (properties, chosen) => {
    if (!properties) {
      return null;
    }

    return properties.find(element => element.slug === chosen);
  }
);
