import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    confirmpassword: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  changeConfirmPassword = (e) => {
    this.setState({ confirmpassword: e.target.value });
  };

  signup = () => {
    alert("signup..." + this.state.email);
  };

  render() {
    return (
      <div className={css.Signup}>
        <h1>Sign up</h1>
        <p>Please input your information</p>
        <input
          onChange={this.changeEmail}
          type="text"
          name=""
          placeholder="input your email"
        />
        <input
          onChange={this.changePassword}
          type="password"
          name=""
          placeholder="input your password"
        />
        <input
          onChange={this.changeConfirmPassword}
          type="password"
          name=""
          placeholder="confirm your password"
        />
        <Button text="Sign up" btnType="Success" clicked={this.signup} />
      </div>
    );
  }
}

export default SignupPage;
