import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { reducers } from './reducers/index';

var destination = document.querySelector('#container');

let middlewares = [thunk];
let middleware = applyMiddleware(...middlewares);

const store = createStore (reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <div className="container-form">
      <Header />
      <TodoList />
    </div>
  </Provider>
  ,
  destination

);

