import { lyricsActionTypes } from './actionTypes';

export const addLyrics = (trackId, name, artist, lyrics, addedBy) => {
    const lyricsPayload =  {
        'track_id': trackId,
        'name': name,
        'artist': artist,
        'lyrics': lyrics, 
        'added_by': addedBy
    }
    return {
        type: lyricsActionTypes.addLyrics,
        payload: lyricsPayload
    }
}

export const getTrackLyrics = (trackId) => {
    return {
        type: lyricsActionTypes.getTrackLyrics,
        payload: trackId
    }
}

export const getLatestLyrics = () => {
    return {
        type: lyricsActionTypes.getLatestLyrics
    }
}