import { deviceActionTypes } from './actionTypes';

export const fetchDeviceList = (accessToken) => {
    return {
        type: deviceActionTypes.fetchDeviceList,
        payload: accessToken
    }
}