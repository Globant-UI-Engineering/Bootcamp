import { playerActionTypes } from './actionTypes';

export const setNowPlaying = (accessToken) => {
    return {
        type: playerActionTypes.fetchNowPlaying,
        payload: accessToken
    }
}

export const resumeTrack = (accessToken) => {
    return {
        type: playerActionTypes.resumeTrack,
        payload: accessToken
    }
}

export const pauseTrack = (accessToken) => {
    return {
        type: playerActionTypes.pauseTrack,
        payload: accessToken
    }
}