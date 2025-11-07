import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../redux/actions/loginAcitons";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import css from "./style.module.css";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    props.userlogin(email, password);
  };

  return (
    <div className={css.Login}>
      {props.userId && <Redirect to="/orders" />}
      <h1>Login</h1>
      <p>Please input your information</p>
      <input
        onChange={changeEmail}
        type="text"
        name=""
        placeholder="input your email"
      />
      <input
        onChange={changePassword}
        type="password"
        name=""
        placeholder="input your password"
      />
      {props.loggingIn && <Spinner />}

      {props.error && <div style={{ color: "red" }}>{props.error}</div>}
      <Button text="Login" btnType="Success" clicked={login} />
    </div>
  );
};

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
