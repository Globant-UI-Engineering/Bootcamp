import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./components/store";
import AppRoutes from "./routes";
import registerServiceWorker from './registerServiceWorker';


render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router >
    </Provider>,

document.getElementById('root'));
registerServiceWorker();
