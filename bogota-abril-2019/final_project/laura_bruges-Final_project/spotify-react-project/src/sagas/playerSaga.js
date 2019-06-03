import { takeEvery, call, put } from 'redux-saga/effects';
import { playerActionTypes } from '../actions/actionTypes'
import { fetchNowPlaying, resumeTrack, pauseTrack } from '../api/playerApi'

function* fetchNowPlayingSaga(action) {
    const data = yield call(fetchNowPlaying, action.payload);
    const playerPayload = {
        progressMs: data.data.progress_ms,
        durationMs: data.data.item ? data.data.item.duration_ms : 0,
        name: data.data.item ? data.data.item.name : 'No track playing',
        artist: data.data.item ? data.data.item.artists[0].name : 'N/A',
        isPlaying: data.data.is_playing
    }
    
    yield put({
        type: playerActionTypes.fetchNowPlayingSuccess,
        payload: playerPayload
    })
    return data;
}

function* resumeTrackSaga(action) {
    console.log(action);
    const data = yield call(resumeTrack, action.payload);

    yield put({
        type: playerActionTypes.resumeTrackSuccess,
        payload: data
    })
}

function* pauseTrackSaga(action) {
    console.log(action);
    const data = yield call(pauseTrack, action.payload);

    yield put({
        type: playerActionTypes.pauseTrackSuccess,
        payload: data
    })
}

export default function* playerSaga() {
    yield takeEvery(playerActionTypes.fetchNowPlaying, fetchNowPlayingSaga);
    yield takeEvery(playerActionTypes.resumeTrack, resumeTrackSaga);
    yield takeEvery(playerActionTypes.pauseTrack , pauseTrackSaga);
};