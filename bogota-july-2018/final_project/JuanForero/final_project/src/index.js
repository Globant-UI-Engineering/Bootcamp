import React from 'react';
import {render} from 'react-dom';
import './index.css';
import{BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';
import {Provider} from 'react-redux';
import store from './store'

render(
    <Provider store={store}>
    <Router>  
    <AppRoutes />
    </Router>
    </Provider>   
    ,document.getElementById('root'));

registerServiceWorker();
