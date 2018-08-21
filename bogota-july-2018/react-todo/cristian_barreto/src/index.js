import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './containers/App';
import mainReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(mainReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
