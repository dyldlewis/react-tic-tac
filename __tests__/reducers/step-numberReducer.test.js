import stepNumber from './../../src/reducers/step-number-reducer';
import c from './../../src/constants';

describe("stepNumber reducer", () => {
  let action;
  const stepNumberInfo = {
    stepNumber: 0
  }
  test('Should return equal state if no action type is recognized', () => {
    action = {type: null};
    expect(stepNumber([], action)).toEqual([]);
  });

});
