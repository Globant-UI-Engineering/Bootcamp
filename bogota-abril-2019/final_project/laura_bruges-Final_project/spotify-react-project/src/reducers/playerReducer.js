import {
    playerActionTypes
} from '../actions/actionTypes';

const initialState = {
    playing: {
        trackId: null,
        progressMs: 0,
        durationMs: 0,
        name: 'No track playing',
        artist: 'N/A',
        isPlaying: false,
        deviceId: null,
        currPlaylistUri: null,
        currPlaylistId: null,
        isShuffled: false,
        repeatState: 'off'
    }
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case playerActionTypes.fetchNowPlaying:
            return {
                ...state,
                payload: action.playing
            }
        case playerActionTypes.fetchNowPlayingSuccess:
            return {
                ...state,
                playing: action.payload
            }
        default:
            return state;
    }
}

export default playerReducer;