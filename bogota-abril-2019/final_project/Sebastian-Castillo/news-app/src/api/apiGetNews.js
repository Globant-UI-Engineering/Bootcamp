import Api from './index';
import { URL_INITIAL_NEWS } from './urls';

export const getNewsApi = () => {
  return Api.get(URL_INITIAL_NEWS).then((response) => Promise.all([response]));
};

export const getNewsPageApi = (page) => {
  return Api.getPage(URL_INITIAL_NEWS, page).then((response) =>
    Promise.all([response])
  );
};
