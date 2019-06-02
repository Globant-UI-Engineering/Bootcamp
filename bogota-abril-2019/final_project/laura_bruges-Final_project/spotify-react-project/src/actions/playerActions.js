import { playerActionTypes } from './actionTypes';

export const setNowPlaying = (accessToken) => {
    return {
        type: playerActionTypes.fetchNowPlaying,
        payload: accessToken
    }

    // return (dispatch) => {
    //     axios.get(NOW_PLAYING_URL, { headers: { Authorization: `Bearer ${accessToken}` } })
    //     .then((response) => {        
    //         let data = response.data;
    //         let playing = {
    //             item: data.item,
    //             isPlaying: data.is_playing,
    //             progressMs: data.progress_ms
    //         }
    //         dispatch(fetchNowPlaying(playing));
    //     })
    // }
}