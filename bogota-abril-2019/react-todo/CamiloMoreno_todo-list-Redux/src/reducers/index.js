import {combineReducers} from 'redux';
import taskReducers from './taskReducers.js';

export default combineReducers({
    tasks:taskReducers
});