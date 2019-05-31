import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import playerReducer from './playerReducer';
import userReducer from './userReducer';

export default combineReducers({
    tokenReducer,
    playerReducer,
    userReducer
});