
import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "abhi",
      password: "",
      password2: "",
      email: "",
    };
  }
  registerSubmit = (e) => {
    const api = "/api/users";
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    console.log("submit event called");
    axios
      .post(api, this.state) // api, data
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (localStorage.token) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Sign up</h1>
              <p class="lead text-center">Create your DevConnector account</p>
              <form onSubmit={this.registerSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
