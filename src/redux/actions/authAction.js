import axios from "axios";
import { REGISTER_SUCCESS } from "../types";
// this action will accept the data
// will accept a json object which contains name , email , password
export default register = ({ email, password, name }) => async (dispatch) => {
  // here rt we will perform a rest call
  // do we need to set a header content-type ===>
  // async ===>
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password, name });

  try {
    // we will write the code where there is chance of raising the exception.

    const res = await axios.post("/api/users", body, config);
    // if this call is successfull
    //then we want to connect to thunk and we need to provide the data which is coming frm rest call i.e. res object
    // actions===> thunk ===> some should be there to connect actions and thunk
    // and it should share the 2 things with the thunk :
    // 1. data
    // 2. type value ===> flag.
    /// this work can be done by dispatch method.

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    // used to hold those exceptions.
  }
  // we will connect to thunk
  // later thunk will provide the data to reducers ===> reducers will store that info to store .
};
