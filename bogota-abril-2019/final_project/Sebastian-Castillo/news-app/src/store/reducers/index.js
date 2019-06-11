import { combineReducers } from 'redux';
import dataHeadlines from './dataHeadlinesReducers';
import dataNews from './dataNewsReducer';
import dataUser from './dataUserReducer';

export default combineReducers({
  dataNews,
  dataHeadlines,
  dataUser,
});
