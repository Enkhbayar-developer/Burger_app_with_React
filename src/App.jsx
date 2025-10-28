import { useState } from "react";
import css from "./App.module.css";

import Toolbar from "./components/Toolbar";
import BurgerBuilder from "./pages/BurgerBuilder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toolbar />
      <div className={css.Content}>
        <BurgerBuilder />
      </div>
    </>
  );
}

export default App;
