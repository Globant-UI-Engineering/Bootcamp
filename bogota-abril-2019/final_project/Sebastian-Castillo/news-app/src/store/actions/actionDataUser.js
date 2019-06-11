import { getUserApi } from '../../api/apiGetUser';

export const actions = {
  FETCHING_DATA_USER: 'FETCHING_DATA_USER',
  FETCHING_DATA_USER_SUCCESS: 'FETCHING_DATA_USER_SUCCESS',
  FETCHING_DATA_REAL_USER_SUCCESS: 'FETCHING_DATA_REAL_USER_SUCCESS',
  FETCHING_DATA_USER_FAILED: 'FETCHING_DATA_USER_FAILED',
};

const getCurrentUser = () => ({
  type: actions.FETCHING_DATA_USER,
});

const getUserFailed = (error) => ({
  type: actions.FETCHING_DATA_USER_FAILED,
  payload: {
    error,
  },
});

const getUserSuccess = (user) => ({
  type: actions.FETCHING_DATA_USER_SUCCESS,
  payload: {
    user,
  },
});

const getUserRealSuccess = (user, isAuthenticated) => ({
  type: actions.FETCHING_DATA_REAL_USER_SUCCESS,
  payload: {
    user,
    isAuthenticated,
  },
});

export const getUser = () => (dispatch) => {
  dispatch(getCurrentUser());
  getUserApi()
    .then((response) => {
      dispatch(getUserSuccess(response[0].results[0]));
    })
    .catch((error) => dispatch(getUserFailed(error)));
};

export const getRealUser = (user, isAuthenticated) => (dispatch) => {
  dispatch(getUserRealSuccess(user, isAuthenticated));
};
