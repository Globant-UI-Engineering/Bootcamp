import { CHANGE_PAGE } from './constants/actionTypes';

export const changePage = page => ({
  type: CHANGE_PAGE,
  actualPage: page
});
