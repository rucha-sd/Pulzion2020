import React, { Component } from "react";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    contactNo: "",
    year: "",
    college: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      <form className="signup-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={this.state.firstName}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.onChange}
        />

        <input
          type="text"
          placeholder="Contact number"
          name="contactNo"
          value={this.state.contactNo}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="College"
          name="college"
          value={this.state.college}
          onChange={this.onChange}
        />

        <input
          type="text"
          placeholder="Year"
          name="year"
          value={this.state.year}
          onChange={this.onChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.onChange}
        />
        <button id="signup-btn" type="submit" className="btn">
          Sign Up
        </button>
      </form>
    );
  }
}

export default Register;
