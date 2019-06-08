import Api from './index';
import { URL_INITIAL_HEADLINES } from './urls';

export const getHeadlinesApi = () => {
  return Api.get(URL_INITIAL_HEADLINES).then((response) =>
    Promise.all([response])
  );
};
