import { combineReducers } from 'redux';
import taskReducer from '../reducers/taskReducer';

export default combineReducers({
    tareas: taskReducer
});