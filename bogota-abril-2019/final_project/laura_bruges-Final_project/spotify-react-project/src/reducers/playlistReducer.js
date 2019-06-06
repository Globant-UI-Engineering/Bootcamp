import { playlistActionTypes } from '../actions/actionTypes';

const initialState = {
    currPlaylist: {
        items: []
    }
}

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case playlistActionTypes.fetchPlaylistSuccess:
            return {
                ...state,
                currPlaylist: action.payload
            }
        default:
            return state;
    }
}

export default playlistReducer;