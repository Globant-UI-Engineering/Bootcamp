import { CHANGE_PAGE } from '../../actions/constants/actionTypes';

const initialState = {
  actualPage: ''
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        actualPage: action.actualPage,
      });
    default:
      return state;
  }
};
