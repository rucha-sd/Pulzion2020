import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const elements = document.getElementsByClassName("error");
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].remove();
    }
    Object.keys(this.state).forEach((ele) => {
      if (this.state[ele] === "") {
        document.getElementsByName(ele).forEach((sub) => {
          sub.insertAdjacentHTML(
            "afterend",
            `<div class="error"> *Required </div>`
          );
        });
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign in</h1>
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <div>
          <a href="!#" className="link">
            Forgot your password?
          </a>
        </div>
        <button type="submit" id="signin-btn" className="btn">
          Sign In
        </button>
      </form>
    );
  }
}

export default Login;
