import { combineReducers } from 'redux';
import login from './login';
import news from './news';
import misc from './misc';
import user from './user';
import furni from './furni';

export default combineReducers({
  login,
  news,
  misc,
  user,
  furni,
});

