export function postReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
  //   match better than if
  //   if (action.type === "FETCH_POSTS") return action.payload;
  //   return state;
}
