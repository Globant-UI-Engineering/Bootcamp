import { combineReducers } from 'redux';
import { navReducer } from './navReducers/index';
import { graphReducer } from './graphReducers/index';

export const rootReducer = combineReducers({
  navReducer,
  graphReducer
});
