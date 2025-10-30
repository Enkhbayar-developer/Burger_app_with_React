import React from "react";
import css from "./App.module.css";

import Toolbar from "./components/Toolbar";
import BurgerPage from "./pages/BurgerPage";
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
          <BurgerPage />
        </div>
      </>
    );
  }
}

export default App;
