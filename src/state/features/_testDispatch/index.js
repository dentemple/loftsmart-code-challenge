/* types */
export const _TEST_DISPATCH = '_TEST_DISPATCH';

/* actions */
export const _testDispatch = () => ({
  type: _TEST_DISPATCH
});

/* state */
export const initialState = {
  str: 'Hello, world',
  val: 0
};

/* reducers */
export default function _test(state = initialState, action) {
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
