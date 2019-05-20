import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import dataBase from './store/firebaseStore';
import tenisMatchStore from './store/tenisMatchStore';
import utils from './utils/utils';


utils.capitalizeString(); // Add prototype fuction
ReactDOM.render(
    <App 
        fireStore={dataBase.fireStore}
        store={tenisMatchStore}
    />
    , document.getElementById('root'));

serviceWorker.unregister();
