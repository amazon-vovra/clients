import rootReducers from "../reducers"; // it will refer the index.js
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// 1. reducer details
// 2. initialstate
// 3. middleware spec ===> thunk and devtool
// composewithDevtools===> will help u to get the access for ur MW and devtools.

export default store;
