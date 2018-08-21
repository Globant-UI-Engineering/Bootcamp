import { combineReducers } from 'redux';
import todos from './todo-reducer';
import toDoFilter from './todo-filter-reducer';

export default combineReducers({
    todos,
    toDoFilter
});