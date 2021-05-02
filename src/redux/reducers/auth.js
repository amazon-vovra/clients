import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: false, // to apply spinner
  user: null, // user info.
};
// 2nd arg content will come from action.

export default (state = initialState, action) => {
  const { type, payload } = action;
  // type : name of the flag
  // payload: name of the auth result.
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      // hold the token
      // who will provide the token ===> will be provided by actions
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload };
    //   this content will be stored to the store.

    default:
      return state;
  }
};
