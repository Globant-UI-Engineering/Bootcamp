import { lyricsActionTypes } from '../actions/actionTypes';

const initialState = {
    currTrackLyrics: {
        'track_id': '',
        'name': '',
        'artist': '',
        'lyrics': '', 
        'added_by': ''
    },
    latestLyrics: [
        {
            'track_id': '',
            'name': '',
            'artist': '',
            'lyrics': '', 
            'added_by': ''
        }
    ]
}
const lyricsReducer = (state = initialState, action) => {
    switch(action.type) {
        case lyricsActionTypes.getTrackLyricsSuccess:
            return {
                ...state,
                currTrackLyrics: action.payload
            };
        case lyricsActionTypes.getLatestLyricsSuccess:
            return {
                ...state,
                latestLyrics: action.payload
            }

        default:
            return state;
    }
}

export default lyricsReducer;