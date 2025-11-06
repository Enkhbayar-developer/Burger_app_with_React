import React from "react";
import css from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Toolbar from "./components/Toolbar";
import BurgerPage from "./pages/BurgerPage";
import OrderPage from "./pages/OrderPage";
import Sidebar from "./components/Sidebar";
import ShippingPage from "./pages/ShippingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Logout from "./components/Logout";
import * as actions from "./redux/actions/loginAcitons";
import * as signupActions from "./redux/actions/signupActions";

class App extends React.Component {
  state = {
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      showSidebar: !prevState.showSidebar,
    }));
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        this.props.autologoutAfterTokenExpire(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        this.props.autoLogout();
      }
    }
  };

  render() {
    return (
      <>
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <div className={css.Content}>
          {this.props.userId ? (
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/" component={BurgerPage} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Redirect to="/login" />
            </Switch>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    autoLogout: () => dispatch(signupActions.logout()),
    autologoutAfterTokenExpire: () => {
      dispatch(signupActions.autologoutAfterTokenExpire());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
