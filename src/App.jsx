import React from "react";
import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";

import Toolbar from "./components/Toolbar";
import BurgerPage from "./pages/BurgerPage";
import OrderPage from "./pages/OrderPage";
import Sidebar from "./components/Sidebar";

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
          <Routes>
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/" element={<BurgerPage />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
