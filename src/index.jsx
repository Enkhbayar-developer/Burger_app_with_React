import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import burgerReducer from "./redux/reducer/burgerreducer";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("middleware: dispatching ==> ", action);
      console.log("middleware: state before ==> ", store.getState());
      const result = next(action);
      console.log("middleware: state after ==> ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  burgerReducer,
  composeEnhancers(applyMiddleware(logger))
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
