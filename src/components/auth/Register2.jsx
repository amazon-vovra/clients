import React, { useState } from "react";
import axios from "axios";
const Register2 = () => {
  //hooks ===> useState()===> providing the state spec.
  //    stateName, setter method to set the data = useState({initial values})
  const [formData, setformData] = useState({
    name: "abhi",
    password: "",
    password2: "",
    email: "",
  });
  // Error state
  const [error, setError] = useState({});
  /// to hold all errors for our application.

  const { name, email, password, password2 } = formData;
  // name ==> formData.name ===> name only
  // destructuring
  const registerSubmit = async (e) => {
    const api = "/api/users";
    e.preventDefault();
    console.log(JSON.stringify(formData));
    console.log("submit event called");
    axios
      .post(api, formData) // api, data
      .then((res) => {
        console.log(JSON.stringify(res));
        // do we need to store the token?
        // it should be store @ the client side ==> localStorage.
        localStorage.setItem("token", res.data.token);
      }) // success part we should switch to dashboard page
      .catch((err) => {
        console.log(JSON.stringify(err)); // render the errors over the form
      }); // failure part
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div class="register">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Sign up</h1>
            <p class="lead text-center">Create your DevConnector account</p>
            <form onSubmit={(e) => registerSubmit(e)}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
