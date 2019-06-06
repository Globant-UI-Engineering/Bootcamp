import { takeEvery, call, put } from 'redux-saga/effects';
import { playlistActionTypes } from '../actions/actionTypes'
import { fetchPlaylist } from '../api/playlistApi'

function* fetchPlaylistSaga(action) {
    const data = yield call(fetchPlaylist, action.payload, action.playlistId);
    const playlistData = data.data;

    const playlistPayload = {
        items: playlistData.tracks.items
    }

    yield put({
        type: playlistActionTypes.fetchPlaylistSuccess,
        payload: playlistPayload
    })
    return data;
}


export default function* playerSaga() {
    yield takeEvery(playlistActionTypes.fetchPlaylist, fetchPlaylistSaga);
};