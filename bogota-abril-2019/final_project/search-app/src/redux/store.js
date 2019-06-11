import { createStore, combineReducers } from 'redux';
import restultList from './reducers/restultList'
import allTechnologys from './reducers/allTechnologys'
import userInput from './reducers/userInput'

const reducer = combineReducers({
    restultList,
    allTechnologys,
    userInput
});

const store = createStore(reducer);

export default store;