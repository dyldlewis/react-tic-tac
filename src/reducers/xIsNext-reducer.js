export default (state = true , action) => {
  switch(action.type) {
    case "CHANGE_XISNEXT":
      console.log(action);
      var newState = action.xIsNext;
      return newState;
    case "JUMP":
    console.log(action)
      var thisState = action.xIsNext;
    return thisState
    default:
      return state;
  }
}
