import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/actions/loginAcitons";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
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
    this.props.userlogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/orders" />}
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
        {this.props.loggingIn && <Spinner />}

        {this.props.error && (
          <div style={{ color: "red" }}>{this.props.error}</div>
        )}
        <Button text="Login" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.signupReducer.loggingIn,
    error: state.signupReducer.error,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userlogin: (email, password) =>
      dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
