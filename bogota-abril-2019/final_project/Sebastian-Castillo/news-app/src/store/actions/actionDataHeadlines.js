import { getHeadlinesApi } from '../../api/apiGetHeadlines';

export const actions = {
  FETCHING_DATA_HEADLINES: 'FETCHING_DATA_HEADLINES',
  FETCHING_DATA_HEADLINES_SUCCESS: 'FETCHING_DATA_HEADLINES_SUCCESS',
  FETCHING_DATA_HEADLINES_FAILED: 'FETCHING_DATA_HEADLINES_FAILED',
};

const getCurrentHeadlines = () => ({
  type: actions.FETCHING_DATA_HEADLINES,
});

const getHeadlinesFailed = (error) => ({
  type: actions.FETCHING_DATA_HEADLINES_FAILED,
  payload: {
    error,
  },
});

const getHeadlinesSuccess = (headlines) => ({
  type: actions.FETCHING_DATA_HEADLINES_SUCCESS,
  payload: {
    headlines,
  },
});

export const getHeadlines = () => (dispatch) => {
  dispatch(getCurrentHeadlines());
  getHeadlinesApi()
    .then((response) => {
      dispatch(getHeadlinesSuccess(response[0].articles));
    })
    .catch((error) => dispatch(getHeadlinesFailed(error)));
};
