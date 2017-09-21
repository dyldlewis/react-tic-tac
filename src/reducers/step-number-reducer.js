export default (state = 0 , action) => {
  switch(action.type) {
    case "CHANGE_STEP":
    console.log(action);
    var newStep = action.stepNumber;
    return newStep;
    case "JUMP_STEP":
    var thisStep = action.stepNumber;
    return thisStep;
    default:
    return state;
  }
}
