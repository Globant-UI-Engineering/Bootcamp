import { combineReducers } from 'redux';
import login from './login';
import news from './news';
import misc from './misc';

export default combineReducers({
  login,
  news,
  misc
});

