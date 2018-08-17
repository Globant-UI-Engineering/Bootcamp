import React from 'react';
import {render} from 'react-dom';
import './index.css';
import{BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes';
render(
    <Router>
    <AppRoutes />
    </Router>,document.getElementById('root'));

registerServiceWorker();
