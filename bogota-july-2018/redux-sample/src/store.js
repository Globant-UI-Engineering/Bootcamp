import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { reducers } from './reducers/index';

let middlewares = [thunk];
let middleware = applyMiddleware(...middlewares);
const store = createStore(reducers, middleware);

export { store };