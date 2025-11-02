import React from "react";
import css from "./App.module.css";
import { Switch, Route } from "react-router-dom";

import Toolbar from "./components/Toolbar";
import BurgerPage from "./pages/BurgerPage";
import OrderPage from "./pages/OrderPage";
import Sidebar from "./components/Sidebar";
import { ShippingPage } from "./pages/ShippingPage";

class App extends React.Component {
  state = {
    showSidebar: false,
    favourite: "N/A",
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      showSidebar: !prevState.showSidebar,
    }));
  };

  choose = (ing) => {
    this.setState({ favourite: ing });
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
          <p>Сонгосон орц: {this.state.favourite}</p>
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route
              path="/"
              render={() => <BurgerPage choose={this.choose} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
