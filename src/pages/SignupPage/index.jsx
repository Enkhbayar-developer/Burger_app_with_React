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
    passchecklength: false,
    passcheckuppercase: false,
    passchecklowercase: false,
    passcheckdigit: false,
    passcheckspecial: false,
    passcheckset: false,
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
    //Check for minimum length (e.g., 8 characters)
    if (e.target.value.length > 7 || e.target.value.length == 8) {
      this.setState({ passchecklength: true });
    } else {
      this.setState({ passchecklength: false });
    }

    //Check for at least one uppercase letter
    if (/[A-Z]/.test(e.target.value)) {
      this.setState({
        passcheckuppercase: true,
      });
    } else {
      this.setState({
        passcheckuppercase: false,
      });
    }

    //Check for at least one lowercase letter
    if (/[a-z]/.test(e.target.value)) {
      this.setState({
        passchecklowercase: true,
      });
    } else {
      this.setState({
        passchecklowercase: false,
      });
    }

    //Check for at least one digit
    if (/[0-9]/.test(e.target.value)) {
      this.setState({ passcheckdigit: true });
    } else {
      this.setState({ passcheckdigit: false });
    }

    //Check for at least one special character (e.g., !@#$%^&*)
    if (/[!@#$%^&*()]/.test(e.target.value)) {
      this.setState({
        passcheckspecial: true,
      });
    } else {
      this.setState({
        passcheckspecial: false,
      });
    }

    if (
      this.state.passchecklength &&
      this.state.passchecklowercase &&
      this.state.passcheckuppercase &&
      this.state.passcheckdigit &&
      this.state.passcheckspecial
    ) {
      this.setState({ passcheckset: true });
    } else {
      this.setState({ passcheckset: false });
    }
  };

  changeConfirmPassword = (e) => {
    this.setState({ confirmpassword: e.target.value });
  };

  signup = () => {
    if (
      this.state.passchecklength &&
      this.state.passchecklowercase &&
      this.state.passcheckuppercase &&
      this.state.passcheckdigit &&
      this.state.passcheckspecial
    ) {
      if (this.state.password === this.state.confirmpassword) {
        this.props.signupUser(this.state.email, this.state.email);
      } else {
        this.setState({ error: "Нууц үг таарахгүй байна" });
      }
    }
  };

  render() {
    return (
      <div className={css.Signup}>
        {this.props.userId && <Redirect to="/" />}
        <h1>Бүртгүүлэх форм</h1>
        <p>Бүртгүүлээд захиалгын мэдээлэлээ хадгалаарай</p>
        <input
          onChange={this.changeEmail}
          type="text"
          name=""
          placeholder="Эмайл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="password"
          name=""
          placeholder="Нууц үг"
        />
        <div className={css.PasswordCheckContainer}>
          <div
            className={
              this.state.passcheckset
                ? css.PasswordCheckListSuccess
                : css.PasswordCheckList
            }
          >
            {this.state.passchecklength ? (
              <p className={css.Success}>
                Нууц үгийн урт<i className="fa-solid fa-check"></i>
              </p>
            ) : (
              <p className={css.Error}>
                Нууц үгийн урт багадаа 8 байна<i class="fa-solid fa-xmark"></i>
              </p>
            )}
            {this.state.passchecklowercase ? (
              <p className={css.Success}>
                Нууц үг жижиг үсэг багтсан<i className="fa-solid fa-check"></i>
              </p>
            ) : (
              <p className={css.Error}>
                Нууц үг жижиг үсэг агуулах<i class="fa-solid fa-xmark"></i>
              </p>
            )}
            {this.state.passcheckuppercase ? (
              <p className={css.Success}>
                Нууц үг том үсэг багтсан<i className="fa-solid fa-check"></i>
              </p>
            ) : (
              <p className={css.Error}>
                Нууц үг том үсэг агуулах<i class="fa-solid fa-xmark"></i>
              </p>
            )}
            {this.state.passcheckdigit ? (
              <p className={css.Success}>
                Нууц үгэнд тоо багтсан<i className="fa-solid fa-check"></i>
              </p>
            ) : (
              <p className={css.Error}>
                Нууц үгэнд тоо агуулах<i class="fa-solid fa-xmark"></i>
              </p>
            )}
            {this.state.passcheckspecial ? (
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
          onChange={this.changeConfirmPassword}
          type="password"
          name=""
          placeholder="Нууц үг давтах"
        />
        <div className={css.PasswordCheckContainer}>
          {this.state.error && (
            <div
              style={{ color: "red", border: "1px solid red", padding: "10px" }}
            >
              {this.state.error}
            </div>
          )}
          {this.props.error && (
            <div
              style={{ color: "red", border: "1px solid red", padding: "10px" }}
            >
              {this.props.error}
            </div>
          )}
        </div>
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
