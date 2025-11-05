import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import burgerReducer from "./redux/reducer/burgerreducer";
import orderReducer from "./redux/reducer/orderReducer";

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

const reducers = combineReducers({
  burgerReducer,
  orderReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
