import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    tokenReducer,
    playerReducer
});