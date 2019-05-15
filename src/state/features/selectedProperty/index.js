import { createSelector } from 'reselect';
import { getPropertiesFromState } from '../getProperties';

/* types */
export const UPDATE_SELECTED_PROPERTY = 'UPDATE_SELECTED_PROPERTY';
export const CLEAR_SELECTED_PROPERTY = 'CLEAR_SELECTED_PROPERTY';

/* actions */
export const updateSelectedProperty = slug => ({
  type: UPDATE_SELECTED_PROPERTY,
  slug
});

/* state */
export const initialState = {
  slug: null
};

/* reducers */
export default function property(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTED_PROPERTY:
      return {
        ...state,
        slug: action.slug
      };

    case CLEAR_SELECTED_PROPERTY:
      return {
        ...state,
        slug: null
      };

    default:
      return state;
  }
}

/* selectors */
export const getSelectedPropertySlug = state => state.property.slug;

export const getSelectedPropertyFromState = createSelector(
  [getPropertiesFromState, getSelectedPropertySlug],
  ({ properties }, selected) => {
    if (!properties) {
      return null;
    }

    return properties.find(element => element.slug === selected);
  }
);
