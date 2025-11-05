import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class SignupPage extends Component {
  state = {
    email: "",
    password: "",
    confirmpassword: "",
    error: "",
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
    // Check for minimum length (e.g., 8 characters)
    // if (this.state.password < 8) {
    //   this.setState({ error: "Password must be at least 8 characters long." });
    // }

    // Check for at least one uppercase letter
    // if (!/[A-Z]/.test(this.state.password)) {
    //   this.setState({
    //     error: "Password must contain at least one uppercase letter.",
    //   });
    // }

    // Check for at least one lowercase letter
    // if (!/[a-z]/.test(this.state.password)) {
    //   this.setState({
    //     error: "Password must contain at least one lowercase letter.",
    //   });
    // }

    // Check for at least one digit
    // if (!/[0-9]/.test(this.state.password)) {
    //   this.setState({ error: "Password must contain at least one digit." });
    // }

    // Check for at least one special character (e.g., !@#$%^&*)
    // if (!/[!@#$%^&*()]/.test(this.state.password)) {
    //   this.setState({
    //     error:
    //       "Password must contain at least one special character (!@#$%^&*()).",
    //   });
    // }

    if (this.state.password === this.state.confirmpassword) {
      this.props.signupUser(this.state.email, this.state.email);
    } else {
      this.setState({ error: "password doesn't match" });
    }
  };

  render() {
    return (
      <div className={css.Signup}>
        {this.props.userId && <Redirect to="/" />}
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
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        {this.props.error && (
          <div style={{ color: "red" }}>{this.props.error}</div>
        )}
        {this.props.saving && <Spinner />}
        <Button text="Sign up" btnType="Success" clicked={this.signup} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    error: state.signupReducer.error,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
