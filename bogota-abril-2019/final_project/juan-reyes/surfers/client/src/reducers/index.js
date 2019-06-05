import { combineReducers } from 'redux';
// Renaming it as formReducer, to avoid confussion
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

//Better syntax using formReducer
export default combineReducers({
  auth: authReducer,
  form: formReducer
});