import { actions } from '../actions/actionDataHeadlines';

const initialState = {
  headlines: [],
  isFetchingHeadlines: false,
  error: false,
  errorHeadlines: null,
};

export default function dataHeadlines(state = initialState, action) {
  switch (action.type) {
    case actions.FETCHING_DATA_HEADLINES: {
      return {
        ...state,
        isFetchingHeadlines: true,
      };
    }
    case actions.FETCHING_DATA_HEADLINES_SUCCESS: {
      const { headlines } = action.payload;

      return {
        ...state,
        isFetchingHeadlines: false,
        error: false,
        headlines,
      };
    }

    case actions.FETCHING_DATA_HEEADLINES_FAILED: {
      const errorHeadlines = action.payload.error;
      return {
        ...state,
        isFetchingHeadlines: false,
        error: true,
        errorHeadlines,
      };
    }

    default: {
      return state;
    }
  }
}
