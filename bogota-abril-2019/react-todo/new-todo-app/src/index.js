import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import todoReducer from "./store/reducers/todoReducer";
import {Provider} from "react-redux";


const store = createStore(todoReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
