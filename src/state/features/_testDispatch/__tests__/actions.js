import { _TEST_DISPATCH, _testDispatch } from '../index';

describe('_testDispatch', () => {
  describe('actions', () => {
    it('should create an action without a payload', () => {
      const expectedResult = {
        type: _TEST_DISPATCH
      };
      expect(_testDispatch()).toEqual(expectedResult);
    });
  });
});
