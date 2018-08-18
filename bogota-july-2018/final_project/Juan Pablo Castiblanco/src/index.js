import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers/index";

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
