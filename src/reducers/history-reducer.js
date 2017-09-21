export default (state = [{squares: Array(9).fill(null)}] , action) => {
  switch(action.type) {
    case "CHANGE_HISTORY":
    const { history } = action;
    console.log(history);
    var newState = state.slice();
    newState = action.history;
    return newState;
    default:
      return state;
  }
}
