import { createStore, combineReducers } from 'redux';
import restultList from './reducers/restultList'
import allTechnologys from './reducers/allTechnologys'

const reducer = combineReducers({
    restultList,
    allTechnologys
});

const store = createStore(reducer);

export default store;