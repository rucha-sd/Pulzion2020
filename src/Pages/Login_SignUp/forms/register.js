import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  state = {
    fname: "",
    lname: "",
    contactNumber: "",
    year: "",
    college: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const elements = document.getElementsByClassName("error");
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].remove();
    }
    Object.keys(this.state).forEach(async (ele) => {
      if (this.state[ele].trim() === "") {
        document.getElementsByName(ele).forEach((sub) => {
          sub.insertAdjacentHTML(
            "afterend",
            `<div class="error">*Required</div>`
          );
        });
      }
    });

    const {
      fname,
      lname,
      year,
      college,
      contactNumber,
      email,
      password,
    } = this.state;

    if (password !== this.state.confirmPassword) {
      document.getElementsByName("confirmPassword").forEach((sub) => {
        sub.insertAdjacentHTML(
          "afterend",
          `<div class="error"> Password do not match </div>`
        );
      });
    } else if (
      Object.keys(this.state).every((ele) => this.state[ele].trim() !== "")
    ) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        fname,
        lname,
        email,
        password,
        contactNumber,
        college,
        year,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      try {
        const res = await fetch(
          "http://localhost:8080/user/register",
          requestOptions
        );
        const data = await res.json();
        console.log(data.error);

        if (data.error) {
          const errors = data.error;
          for (let i = 0; i < errors.length; i++) {
            const key = Object.keys(errors[i])[0];
            const val = Object.values(errors[i])[0];
            document.getElementsByName(key).forEach((sub) => {
              sub.insertAdjacentHTML(
                "afterend",
                `<div class="error"> ${val}</div>`
              );
            });
          }
        }
      } catch (e) {}
    }
  };

  render() {
    return (
      <form className="signup-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="fname"
          value={this.state.fname}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lname"
          value={this.state.lname}
          onChange={this.onChange}
        />

        <input
          type="text"
          placeholder="Contact number"
          name="contactNumber"
          value={this.state.contactNumber}
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
          type="text"
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
