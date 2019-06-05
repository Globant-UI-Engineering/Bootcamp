import surfers from '../apis/surfers';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// I am using an async action creator thanks to Redux Thunk
export const createSurfer = formValues => async dispatch => {
  surfers.post('/streams', formValues);
};