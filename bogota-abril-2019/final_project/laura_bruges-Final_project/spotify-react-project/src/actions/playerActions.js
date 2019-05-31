import { playerActionTypes } from './actionTypes';
import axios from 'axios';
import { NOW_PLAYING_URL } from '../utils/EndpointSettings';

export const getNowPlaying = (playing) => {
    return {
        type: playerActionTypes.getNowPlaying,
        playing
    }
}

export const fetchNowPlaying = (accessToken) => {
    return (dispatch) => {
        axios.get(NOW_PLAYING_URL, { headers: { Authorization: `Bearer ${accessToken}` } })
        .then((response) => {        
            let data = response.data;
            let playing = {
                item: data.item,
                isPlaying: data.is_playing,
                progressMs: data.progress_ms
            }
            dispatch(getNowPlaying(playing));
        })
    }
}