import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import LoginTransition from './components/LoginTransition/index';
import User from './components/User';
import store from './storeCreator';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename='/'>
            <Switch>
                <Route path='/' exact component={App}/>
                <Route path='/login/' exact component={LoginTransition} />
                <Route path='/user/' exact component={User} />
            </Switch>
        </BrowserRouter>
    </Provider> 
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
