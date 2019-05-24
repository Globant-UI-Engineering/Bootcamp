import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import utils from './utils/utils';

utils.capitalizeString(); // Add prototype fuction string
ReactDOM.render(
    <App 
        store={store}
    />
    , document.getElementById('root'));

serviceWorker.unregister();
