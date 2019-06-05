import { playerActionTypes } from './actionTypes';

export const setNowPlaying = (accessToken) => {
    return {
        type: playerActionTypes.fetchNowPlaying,
        payload: accessToken
    }
}

export const resumeTrack = (accessToken, deviceId) => {
    return {
        type: playerActionTypes.resumeTrack,
        payload: accessToken,
        deviceId: deviceId
    }
}

export const pauseTrack = (accessToken) => {
    return {
        type: playerActionTypes.pauseTrack,
        payload: accessToken
    }
}