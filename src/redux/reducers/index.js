import { combineReducers } from "redux";
import auth from "./auth";
export default combineReducers({
  // we will provide the ref of all reducers here.
  auth,
});
