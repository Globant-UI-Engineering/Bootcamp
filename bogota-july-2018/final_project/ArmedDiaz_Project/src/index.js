import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch}from'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import promise from "redux-promise";

import './index.css';
import {Grid} from 'react-bootstrap';

import reducers from './reducers';
import Header from './components/header';
import CardList from './containers/card_list';
import CardDescription from'./containers/card_description';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
                <Grid>
                <Header/>
                        <Switch>
                        <Route path="/cards/:idName" component={CardDescription} />
                        <Route path="/" component={CardList} />
                        </Switch>
                </Grid>
        </BrowserRouter>
        </Provider>
        , document.getElementById('root'));
registerServiceWorker();
