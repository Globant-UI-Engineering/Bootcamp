import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/app_reducer';

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.register();
