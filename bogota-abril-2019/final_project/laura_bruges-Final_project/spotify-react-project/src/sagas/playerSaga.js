import { takeEvery, call, put } from 'redux-saga/effects';
import { playerActionTypes } from '../actions/actionTypes'
import { fetchNowPlaying, resumeTrack, pauseTrack, nextTrack, previousTrack } from '../api/playerApi'

function* fetchNowPlayingSaga(action) {
    const data = yield call(fetchNowPlaying, action.payload);
    const playerData = data.data;

    const playerPayload = {
        trackId: playerData.item && playerData.item.id,
        progressMs: playerData.progress_ms,
        durationMs: playerData.item ? playerData.item.duration_ms : 0,
        name: playerData.item ? playerData.item.name : 'No track playing',
        artist: playerData.item ? playerData.item.artists[0].name : 'N/A',
        isPlaying: playerData.is_playing,
        deviceId: playerData.device ? playerData.device.id : '',
        currPlaylistUri: playerData.context && playerData.context.type === 'playlist' ? playerData.context.uri : null 
    }

    playerPayload.currPlaylistId = playerPayload.currPlaylistUri ? 
        playerPayload.currPlaylistUri.substring(playerPayload.currPlaylistUri.lastIndexOf(':') + 1) : 
        null;
    
    yield put({
        type: playerActionTypes.fetchNowPlayingSuccess,
        payload: playerPayload
    })
    return data;
}

function* resumeTrackSaga(action) {
    const data = yield call(resumeTrack, action.payload, action.deviceId);

    yield put({
        type: playerActionTypes.resumeTrackSuccess,
        payload: data
    })
}

function* pauseTrackSaga(action) {
    const data = yield call(pauseTrack, action.payload);

    yield put({
        type: playerActionTypes.pauseTrackSuccess,
        payload: data
    })
}

function* nextTrackSaga(action) {
    const data = yield call(nextTrack, action.payload);

    yield put({
        type: playerActionTypes.nextTrackSuccess,
        payload: data
    })
}

function* previousTrackSaga(action) {
    const data = yield call(previousTrack, action.payload);

    yield put({
        type: playerActionTypes.previousTrackSuccess,
        payload: data
    })
}

export default function* playerSaga() {
    yield takeEvery(playerActionTypes.fetchNowPlaying, fetchNowPlayingSaga);
    yield takeEvery(playerActionTypes.resumeTrack, resumeTrackSaga);
    yield takeEvery(playerActionTypes.pauseTrack, pauseTrackSaga);
    yield takeEvery(playerActionTypes.nextTrack, nextTrackSaga);
    yield takeEvery(playerActionTypes.previousTrack, previousTrackSaga);
};