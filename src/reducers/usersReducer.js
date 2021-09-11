export default function usersReducer(state = [], action) {
  // const newIds = new Set(state.map((user) => user?.id));
  // switch (action.type) {
  //   case "FETCH_USER":
  //     return newIds.has(action.payload.id)
  //       ? [...state]
  //       : [...state, action.payload];
  //   default:
  //     return state;
  // }
  switch (action.type) {
    case "FETCH_USER":
      return action?.payload ? [...state, action.payload] : [...state];
    default:
      return state;
  }
}
