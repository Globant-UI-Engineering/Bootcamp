import './index.css';
import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store.js";
import App from './containers/App';

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}