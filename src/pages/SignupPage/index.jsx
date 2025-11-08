import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/signupActions";
import css from "./style.module.css";

const SignupPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passchecklength, setPassCheckLength] = useState(false);
  const [passchecklowercase, setPasschecklowercase] = useState(false);
  const [passcheckuppercase, setPasscheckuppercase] = useState(false);
  const [passcheckdigit, setPasscheckdigit] = useState(false);
  const [passcheckspecial, setPasscheckspecial] = useState(false);
  const [passcheckset, setPasscheckset] = useState(false);

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    //Check for minimum length (e.g., 8 characters)
    if (e.target.value.length > 7 || e.target.value.length == 8) {
      setPassCheckLength(true);
    } else {
      setPassCheckLength(false);
    }

    //Check for at least one uppercase letter
    if (/[A-Z]/.test(e.target.value)) {
      setPasscheckuppercase(true);
    } else {
      setPasscheckuppercase(false);
    }

    //Check for at least one lowercase letter
    if (/[a-z]/.test(e.target.value)) {
      setPasschecklowercase(true);
    } else {
      setPasschecklowercase(false);
    }

    //Check for at least one digit
    if (/[0-9]/.test(e.target.value)) {
      setPasscheckdigit(true);
    } else {
      setPasscheckdigit(false);
    }

    //Check for at least one special character (e.g., !@#$%^&*)
    if (/[!@#$%^&*()]/.test(e.target.value)) {
      setPasscheckspecial(true);
    } else {
      setPasscheckspecial(false);
    }

    if (
      passchecklength &&
      passchecklowercase &&
      passcheckuppercase &&
      passcheckdigit &&
      passcheckspecial
    ) {
      setPasscheckset(true);
    } else {
      setPasscheckset(false);
    }
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const signup = () => {
    if (
      passchecklength &&
      passchecklowercase &&
      passcheckuppercase &&
      passcheckdigit &&
      passcheckspecial
    ) {
      if (password === confirmpassword) {
        props.signupUser(email, email);
      } else {
        setError("Нууц үг таарахгүй байна");
      }
    }
  };

  return (
    <div className={css.Signup}>
      {props.userId && <Redirect to="/" />}
      <h1>Бүртгүүлэх форм</h1>
      <p>Бүртгүүлээд захиалгын мэдээлэлээ хадгалаарай</p>
      <input
        onChange={changeEmail}
        type="text"
        name=""
        placeholder="Эмайл хаяг"
      />
      <input
        onChange={changePassword}
        type="password"
        name=""
        placeholder="Нууц үг"
      />
      <div className={css.PasswordCheckContainer}>
        <div
          className={
            passcheckset ? css.PasswordCheckListSuccess : css.PasswordCheckList
          }
        >
          {passchecklength ? (
            <p className={css.Success}>
              Нууц үгийн урт<i className="fa-solid fa-check"></i>
            </p>
          ) : (
            <p className={css.Error}>
              Нууц үгийн урт багадаа 8 байна<i class="fa-solid fa-xmark"></i>
            </p>
          )}
          {passchecklowercase ? (
            <p className={css.Success}>
              Нууц үг жижиг үсэг багтсан<i className="fa-solid fa-check"></i>
            </p>
          ) : (
            <p className={css.Error}>
              Нууц үг жижиг үсэг агуулах<i class="fa-solid fa-xmark"></i>
            </p>
          )}
          {passcheckuppercase ? (
            <p className={css.Success}>
              Нууц үг том үсэг багтсан<i className="fa-solid fa-check"></i>
            </p>
          ) : (
            <p className={css.Error}>
              Нууц үг том үсэг агуулах<i class="fa-solid fa-xmark"></i>
            </p>
          )}
          {passcheckdigit ? (
            <p className={css.Success}>
              Нууц үгэнд тоо багтсан<i className="fa-solid fa-check"></i>
            </p>
          ) : (
            <p className={css.Error}>
              Нууц үгэнд тоо агуулах<i class="fa-solid fa-xmark"></i>
            </p>
          )}
          {passcheckspecial ? (
            <p className={css.Success}>
              Нууц үгэнд тусгай тэмдэгт багтсан
              <i className="fa-solid fa-check"></i>
            </p>
          ) : (
            <p className={css.Error}>
              Нууц үгэнд тусгай тэмдэгт агуулах
              <i class="fa-solid fa-xmark"></i>
            </p>
          )}
        </div>
      </div>
      <input
        onChange={changeConfirmPassword}
        type="password"
        name=""
        placeholder="Нууц үг давтах"
      />
      <div className={css.PasswordCheckContainer}>
        {error && (
          <div
            style={{ color: "red", border: "1px solid red", padding: "10px" }}
          >
            {error}
          </div>
        )}
        {props.error && (
          <div
            style={{ color: "red", border: "1px solid red", padding: "10px" }}
          >
            {props.error}
          </div>
        )}
      </div>
      {props.saving && <Spinner />}
      <Button text="Бүртгүүлэх" btnType="Success" clicked={signup} />
    </div>
  );
};

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
