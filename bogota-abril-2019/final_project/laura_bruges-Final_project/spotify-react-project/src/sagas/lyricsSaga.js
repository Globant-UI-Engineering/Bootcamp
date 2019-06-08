import { takeEvery, call, put } from 'redux-saga/effects';
import { lyricsActionTypes } from '../actions/actionTypes'
import { addLyrics, getLatestLyrics, getTrackLyrics } from '../api/lyricsApi'

function* addLyricsSaga(action) {
    const data = yield call(addLyrics, action.payload);

    yield put({
        type: lyricsActionTypes.addLyricsSuccess
    });

    return data;
}

function* getTrackLyricsSaga(action) {
    const data = yield call(getTrackLyrics, action.payload);

    yield put({
        type: lyricsActionTypes.getTrackLyricsSuccess,
        payload: data.data
    });

    return data;
}

function* getLatestLyricsSaga() {
    const data = yield call(getLatestLyrics);

    yield put({
        type: lyricsActionTypes.getLatestLyricsSuccess,
        payload: data.data
    });

    return data;
}

export default function* playerSaga() {
    yield takeEvery(lyricsActionTypes.addLyrics, addLyricsSaga);
    yield takeEvery(lyricsActionTypes.getTrackLyrics, getTrackLyricsSaga);
    yield takeEvery(lyricsActionTypes.getLatestLyrics, getLatestLyricsSaga);
};