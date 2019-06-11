import { playlistActionTypes } from '../actions/actionTypes';

const initialState = {
    currPlaylist: {
        name: 'No playlist playing',
        desciption: 'Please select a playlist',
        items: [
            {
                track: {
                    name: '',
                    artists: [
                        {
                            name: ''
                        }
                    ],
                    album: {
                        name: ''
                    }
                }
            }
        ]
    },
    userPlaylists: []
}

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case playlistActionTypes.fetchPlaylistSuccess:
            return {
                ...state,
                currPlaylist: action.payload
            };
        case playlistActionTypes.fetchUserPlaylistsSuccess:
            return {
                ...state,
                userPlaylists: action.payload
            }
        default:
            return state;
    }
}

export default playlistReducer;