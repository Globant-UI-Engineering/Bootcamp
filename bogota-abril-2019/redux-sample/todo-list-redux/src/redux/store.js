import { createStore, combineReducers } from 'redux';
import background from './reducers/background'

const reducer = combineReducers({
    background
});

const store = createStore(reducer);

export default store;