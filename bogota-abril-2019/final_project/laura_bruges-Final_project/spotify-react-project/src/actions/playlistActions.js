import { playlistActionTypes } from './actionTypes';

export const fetchPlaylist = (accessToken, playlistId) => {
    return {
        type: playlistActionTypes.fetchPlaylist,
        payload: accessToken,
        playlistId: playlistId
    }
}

export const fetchUserPlaylists = (accessToken) => {
    return {
        type: playlistActionTypes.fetchUserPlaylists,
        payload: accessToken
    }
}