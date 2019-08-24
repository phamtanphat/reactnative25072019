export function shouldShowFormReducer(state = false, action) {
  switch (action.type) {
    case "TOGGLE_FORM":
      return !state;
    case "ADD_WORD":
      return false;
    default:
      return state;
  }
}
