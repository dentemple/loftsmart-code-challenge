// Types
export const _TEST_DISPATCH = '_TEST_DISPATCH';

// Actions
export const _testDispatch = () => ({
  type: _TEST_DISPATCH
});

// State
export const initialState = {
  str: 'Hello, world',
  val: 0
};

// Reducers
export function _testReducer(state = initialState, action) {
  switch (action.type) {
    case _TEST_DISPATCH:
      return {
        ...state,
        str: 'Action successfully dispatched!',
        val: state.val + 1
      };

    default:
      return state;
  }
}

export default _testReducer;
