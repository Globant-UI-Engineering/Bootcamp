import { getNewsPageApi } from '../../api/apiGetNews';

export const actions = {
  SAVE_BOOKMARK: 'SAVE_BOOKMARK',
  FETCHING_DATA_NEWS: 'FETCHING_DATA_NEWS',
  FETCHING_DATA_NEWS_SUCCESS: 'FETCHING_DATA_NEWS_SUCCESS',
  FETCHING_DATA_NEWS_PAGE_SUCCESS: 'FETCHING_DATA_NEWS_PAGE_SUCCESS',
  FETCHING_DATA_NEWS_FAILED: 'FETCHING_DATA_NEWS_FAILED',
};

const saveCurrentBookmark = (id) => ({
  type: actions.SAVE_BOOKMARK,
  payload: {
    id,
  },
});

const getCurrentNews = () => ({
  type: actions.FETCHING_DATA_NEWS,
});

const getNewsFailed = (error) => ({
  type: actions.FETCHING_DATA_NEWS_FAILED,
  payload: {
    error,
  },
});

const getNewsSuccess = (news) => ({
  type: actions.FETCHING_DATA_NEWS_SUCCESS,
  payload: {
    news,
  },
});

const getNewsPageSuccess = (news) => ({
  type: actions.FETCHING_DATA_NEWS_PAGE_SUCCESS,
  payload: {
    news,
  },
});

export const getNewsPage = (page) => (dispatch) => {
  getNewsPageApi(page)
    .then((response) => {
      dispatch(getNewsPageSuccess(response[0].articles));
    })
    .catch((error) => dispatch(getNewsFailed(error)));
};

export const getNews = (page) => (dispatch) => {
  dispatch(getCurrentNews());
  getNewsPageApi(page)
    .then((response) => {
      dispatch(getNewsSuccess(response[0].articles));
    })
    .catch((error) => dispatch(getNewsFailed(error)));
};

export const saveBookmark = (bookmark) => (dispatch) => {
  dispatch(saveCurrentBookmark(bookmark));
};
