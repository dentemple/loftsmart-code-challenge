/* types */
export const USER_CHOSEN_PROPERTY = 'USER_CHOSEN_PROPERTY';

/* actions */
export const choseProperty = label => ({
  type: USER_CHOSEN_PROPERTY,
  label
});

/* state */
export const initialState = {
  chosenProperty: null
};

/* reducers */
export default function chosenProperty(state = initialState, action) {
  switch (action.type) {
    case USER_CHOSEN_PROPERTY:
      return {
        ...state,
        chosenProperty: action.label
      };

    default:
      return state;
  }
}

/* selectors */
export const getChosenPropertyFromState = state => state.chosenProperty;
