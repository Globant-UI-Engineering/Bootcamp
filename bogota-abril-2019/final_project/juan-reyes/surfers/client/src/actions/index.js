import surfers from '../apis/surfers';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_SURFER,
  FETCH_SURFERS,
  FETCH_SURFER,
  DELETE_SURFER,
  EDIT_SURFER,
} from './types';

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
  const response = await surfers.post('/surfers', formValues);

  dispatch({ type: CREATE_SURFER, payload: response.data });
};

export const fetchSurfers = () => async dispatch => {
  const response = await surfers.get('/surfers');

  dispatch({ type: FETCH_SURFERS, payload: response.data });
};

export const fetchSurfer = (id) => async dispatch => {
  const response = await surfers.get(`/surfers/${id}`);

  dispatch({ type: FETCH_SURFER, payload: response.data });
};

export const editSurfer = (id, formValues) => async dispatch => {
  const response = await surfers.put(`/surfers/${id}`, formValues);

  dispatch({ type: EDIT_SURFER, payload: response.data });
};

export const deleteSurfer = (id) => async dispatch => {
  await surfers.delete(`/surfers/${id}`);

  dispatch({ type: DELETE_SURFER, payload: id });
};