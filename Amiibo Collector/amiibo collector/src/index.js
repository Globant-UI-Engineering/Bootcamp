import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
/** https://docs.google.com/presentation/d/1EhrMVpGrXsl71ebcJuPYsiWiDC1eLsTIz-ntMk2GQ2s/edit?usp=sharing */
import { createStore, applyMiddleware, compose } from "redux";
import amiiboReducer from "./store/reducers/amiiboRedu";
import registerServiceWorker from "./registerServiceWorker";

import "normalize.css";
import App from "./App";

const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  amiiboReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
