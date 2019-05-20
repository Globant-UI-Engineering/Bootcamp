import { AUTH_BASE_URL } from '../constants/connections';
import store from '../store';

export const logIn = (username, password)  => postRequest(username, password, "users/singin", "LOG_IN");
export const signUp = (username, password) => postRequest(username, password, "users/register", "SIGN_UP");

const postRequest = (username, password, path, type) => {
    let requestSettings = getRequestSettings(username, password);

    fetch(AUTH_BASE_URL + path, requestSettings)
    .then(response => response.json())
    .then(jsonResponse => {
        store.dispatch({
            type: jsonResponse.code === 0 ? type : "SHOW_ERROR",
            response: jsonResponse,
        });
    })
    .catch(error => console.log(error));
}

const getRequestSettings  = (mail, pass) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({mail, pass}),
    }
}


