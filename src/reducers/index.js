import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import userReducer from "./usersReducer";
export default combineReducers({
  post: postReducer,
  user: userReducer,
});
/*
FIXME reducers rule
 * must return any value that is not undefined
 * always return a combination of the current state and the action
 * dont mutate the state
TODO  fact about redux
 * redux run reducers on or start 
 * 
*/
