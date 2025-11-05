import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    alert("login..." + this.state.email);
  };

  render() {
    return (
      <div className={css.Login}>
        <h1>Login</h1>
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
        <Button text="Login" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

export default LoginPage;
