import { combineReducers } from 'redux';
import animeReducer from './anime-reducers';

export default combineReducers({
    animeList:  animeReducer
});