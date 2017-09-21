import history from './../../src/reducers/history-reducer';
import c from './../../src/constants';

describe("History reducer", () => {
  let action;
  const historyInfo = {
    history: [{
      squares: Array()
    }],
  }
  test('Should return equal state if no action type is recognized', () => {
    action = {type: null};
    expect(history([], action)).toEqual([]);
  });

});
