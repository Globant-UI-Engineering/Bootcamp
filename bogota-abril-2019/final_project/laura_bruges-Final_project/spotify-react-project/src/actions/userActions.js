import { userActionTypes } from './actionTypes';
import axios from 'axios';
import { USER_INFO_URL } from '../utils/EndpointSettings';

export const fetchUser = (user) => {
    return {
        type: userActionTypes.fetchUserInfo,
        payload:  user
    }
}

export const setUserInfo = (accessToken) => {
    return {
        type: userActionTypes.fetchUserInfo,
        payload:  accessToken
    }
    // return (dispatch) => {
    //     axios.get(USER_INFO_URL, { headers: { Authorization: `Bearer ${accessToken}` } })
    //     .then((response) => {
    //         let userInfo = response.data;
    //         dispatch(fetchUser(userInfo));
    //     });
    // }
}

