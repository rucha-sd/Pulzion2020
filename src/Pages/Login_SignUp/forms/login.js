import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    const elements = document.getElementsByClassName("error");
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].remove();
    }
    Object.keys(this.state).forEach((ele) => {
      if (this.state[ele].trim() === "") {
        document.getElementsByName(ele).forEach((sub) => {
          sub.insertAdjacentHTML(
            "afterend",
            `<div class="error"> *Required </div>`
          );
        });
      }
    });
    if (email.trim() !== "" && password.trim() !== "") {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({ email, password });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const res = await fetch(
          "http://localhost:8080/user/login",
          requestOptions
        );
        const data = await res.json();
        if (data.error) {
          this.setState({ error: data.error });
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign in</h1>
        <input
          id="email"
          type="text"
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
        {this.state.error && (
          <div className="error main-error">{this.state.error}</div>
        )}
        <button type="submit" id="signin-btn" className="btn">
          Sign In
        </button>
      </form>
    );
  }
}

export default Login;
