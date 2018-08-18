import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from './app.jsx';

export const AppProvider = () => (
    <Provider store={store}>
        <App />
    </Provider>

);