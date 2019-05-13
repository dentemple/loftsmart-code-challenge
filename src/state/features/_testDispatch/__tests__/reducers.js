import reducer, { _TEST_DISPATCH, initialState } from '../index';

describe('_testDispatch', () => {
  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle TEST_DISPATCH', () => {
      const expectedResult = {
        ...initialState,
        str: 'Action successfully dispatched!',
        val: initialState.val + 1
      };
      expect(
        reducer(undefined, {
          type: _TEST_DISPATCH
        })
      ).toEqual(expectedResult);
    });
  });
});
