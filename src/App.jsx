import React from "react";
import css from "./App.module.css";
import { Switch, Route } from "react-router-dom";

import Toolbar from "./components/Toolbar";
import BurgerPage from "./pages/BurgerPage";
import OrderPage from "./pages/OrderPage";
import Sidebar from "./components/Sidebar";
import ShippingPage from "./pages/ShippingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

class App extends React.Component {
  state = {
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      showSidebar: !prevState.showSidebar,
    }));
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
          <Switch>
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
