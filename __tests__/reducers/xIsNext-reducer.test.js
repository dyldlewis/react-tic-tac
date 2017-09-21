import xIsNext from './../../src/reducers/xIsNext-reducer';
import c from './../../src/constants';

describe("xIsNext reducer", () => {
  let action;
  const xIsNextInfo = {
    xIsNext: true
  }
  test('Should return equal state if no action type is recognized', () => {
    action = {type: null};
    expect(xIsNext([], action)).toEqual([]);
  });

});
