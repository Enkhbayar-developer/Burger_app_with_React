import React, { useState, useEffect, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import css from "./App.module.css";

import * as actions from "./redux/actions/loginAcitons";
import * as signupActions from "./redux/actions/signupActions";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import Sidebar from "./components/Sidebar";
import Logout from "./components/Logout";
import Spinner from "./components/General/Spinner";

const BurgerPage = React.lazy(() => {
  return import("./pages/BurgerPage");
});

const OrderPage = React.lazy(() => {
  return import("./pages/OrderPage");
});

const SignupPage = React.lazy(() => {
  return import("./pages/SignupPage");
});

const ShippingPage = React.lazy(() => {
  return import("./pages/ShippingPage");
});

const App = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        props.autoLogin(token, userId);
        props.autologoutAfterTokenExpire(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        props.autoLogout();
      }
    }
  }, []);

  const toggleSidebar = () => {
    let sidebarprev = showSidebar;
    setShowSidebar(!sidebarprev);
  };

  return (
    <>
      <Toolbar toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className={css.Content}>
        <Suspense fallback={<Spinner />}>
          {props.userId ? (
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
        </Suspense>
      </div>
    </>
  );
};

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
