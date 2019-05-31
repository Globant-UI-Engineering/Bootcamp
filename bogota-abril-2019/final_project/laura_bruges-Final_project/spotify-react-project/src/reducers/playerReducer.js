import { playerActionTypes } from '../actions/actionTypes';

const playerReducer = (state={}, action) => {
    switch(action.type) {
        case playerActionTypes.getNowPlaying:
            return {
                ...state,
                playing: action.playing
            }
        default:
            return state;
    }
}

export default playerReducer;