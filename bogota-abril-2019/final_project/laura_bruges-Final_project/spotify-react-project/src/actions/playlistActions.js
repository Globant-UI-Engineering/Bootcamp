import { playlistActionTypes } from './actionTypes';

export const fetchPlaylist = (accessToken, playlistId) => {
    return {
        type: playlistActionTypes.fetchPlaylist,
        payload: accessToken,
        playlistId: playlistId
    }
}