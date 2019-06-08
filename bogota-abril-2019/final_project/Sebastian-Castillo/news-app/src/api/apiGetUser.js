import Api from './apiUser';

export const getUserApi = () => {
  return Api.get('').then((response) => Promise.all([response]));
};
