import { playerActionTypes } from '../actions/actionTypes';

const initialState = {
    playing: {
        item:{}
    }
}
const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case playerActionTypes.fetchNowPlaying:
            return {
                ...state,
                playing: action.playing
            }
        case playerActionTypes.fetchNowPlayingSuccess:
                return {
                    ...state,
                    playing: action.payload
                }
                // return Object.assign({}, state, {
                //     ...state,
                //     playing: action.payload
                // })
        default:
            return state;
    }
}

export default playerReducer;