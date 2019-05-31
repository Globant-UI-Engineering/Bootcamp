import { combineReducers } from 'redux';
// Still developing it
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

//Better syntax using formReducer
export default combineReducers({
  auth: authReducer,
  form: formReducer
});