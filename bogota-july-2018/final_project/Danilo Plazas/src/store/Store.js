import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/index.js';

let middlewares = [thunk];
let middleware = applyMiddleware(...middlewares);

export default createStore(reducers, middleware);
