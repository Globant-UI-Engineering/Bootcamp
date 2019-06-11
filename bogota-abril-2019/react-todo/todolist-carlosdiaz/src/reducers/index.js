import { combineReducers } from 'redux';
import taskReducer from '../reducers/taskReducer';
import formReducer from '../reducers/formReducer';

export default combineReducers({
    tareas: taskReducer,
    error:formReducer
});