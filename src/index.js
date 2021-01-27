import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import FormHandle from "./Form/form";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import reducer from "./Reducer/reducer";

import createReduxPromiseListener from "redux-promise-listener";

const reduxPromiseListener = createReduxPromiseListener();

const logger = (store) => (next) => (action) => {
  return next(action);
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(reduxPromiseListener.middleware, logger))
);

export const promiseListener = reduxPromiseListener; // <---------- IMPORTANT

ReactDOM.render(
  <Provider store={store}>
    <FormHandle />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
