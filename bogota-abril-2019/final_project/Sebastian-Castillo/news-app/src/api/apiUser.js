import { URL_INITIAL_USER } from './urls';

class Api {
  static get(route, query_params) {
    query_params = query_params || '';

    if (query_params.length) {
      let params = '';
      for (const i in query_params) {
        params += `${query_params[i].key}=${query_params[i].value}&`;
      }
      route += `?${params}`;
      route = route.substring(0, route.length - 1);
    }

    return this.xhr(route, null, 'GET');
  }

  /**
   * Function to made and manage the request
   * @param {String} route
   * @param {Object} params
   * @param {String} verb
   */
  static xhr(route, params, verb) {
    const host = URL_INITIAL_USER;
    const url = `${host}${route}`;
    const options = Object.assign(
      { method: verb },
      { timeout: 10000 },
      params ? { body: JSON.stringify(params) } : null
    );
    return fetch(url, options).then((resp) => {
      const json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then((err) => {
        throw err;
      });
    });
  }
}

export default Api;
