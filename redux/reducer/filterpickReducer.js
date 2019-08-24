export function filterPickReducer(state = "Show_All", action) {
  switch (action.type) {
    case "FILTER_MODE":
      return action.filterPick;
    default:
      return state;
  }
}

