import { useState } from "react";
import css from "./App.module.css";

import Toolbar from "./components/Toolbar";
import BurgerPage from "./pages/BurgerPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toolbar />
      <div className={css.Content}>
        <BurgerPage />
      </div>
    </>
  );
}

export default App;
