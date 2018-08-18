import { CHANGE_PAGE } from '../../actions/constants/actionTypes';
import { Page } from '../../actions/constants/actionTypes';

const initialState = {
  page: Page.HOME
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.actualPage,
      });
    default:
      return state;
  }
};
