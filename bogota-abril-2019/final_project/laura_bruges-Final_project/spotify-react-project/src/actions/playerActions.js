import { playerActionTypes } from './actionTypes';

export const setNowPlaying = (accessToken) => {
    return {
        type: playerActionTypes.fetchNowPlaying,
        payload: accessToken
    }
}

export const resumeTrack = (accessToken, deviceId, playlistId, offsetTrackId) => {
    return {
        type: playerActionTypes.resumeTrack,
        payload: accessToken,
        deviceId: deviceId,
        playlistId: playlistId,
        offsetTrackId: offsetTrackId
    }
}

export const pauseTrack = (accessToken) => {
    return {
        type: playerActionTypes.pauseTrack,
        payload: accessToken
    }
}

export const shuffleContext = (accessToken, isShuffled) => {
    return {
        type: playerActionTypes.shuffleContext,
        payload: accessToken,
        isShuffled: isShuffled
    }
}

export const setRepeatStateContext = (accessToken, currRepeatState) => {
    return {
        type: playerActionTypes.setRepeatStateContext,
        payload: accessToken,
        currRepeatState: currRepeatState
    }
} 

export const nextTrack = (accessToken) => {
    return {
        type: playerActionTypes.nextTrack,
        payload: accessToken
    }
}

export const previousTrack = (accessToken) => {
    return {
        type: playerActionTypes.previousTrack,
        payload: accessToken
    }
}