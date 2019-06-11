import { takeEvery, call, put } from 'redux-saga/effects';
import { playlistActionTypes } from '../actions/actionTypes'
import { fetchPlaylist, fetchUserPlaylists } from '../api/playlistApi'

function* fetchPlaylistSaga(action) {
    const data = yield call(fetchPlaylist, action.payload, action.playlistId);
    const playlistData = data.data;
    
    const playlistPayload = {
        name: playlistData.name,
        description: playlistData.description,
        items: playlistData.tracks.items
    }
    
    yield put({
        type: playlistActionTypes.fetchPlaylistSuccess,
        payload: playlistPayload
    });

    return data;
}

function* fetchUserPlaylistsSaga(action) {    
    const data = yield call(fetchUserPlaylists, action.payload);
    const playlistData = data.data;

    const playlistPayload = {
        items: playlistData.items
    }

    yield put({
        type: playlistActionTypes.fetchUserPlaylistsSuccess,
        payload: playlistPayload
    })

    return data;
}

export default function* playerSaga() {
    yield takeEvery(playlistActionTypes.fetchPlaylist, fetchPlaylistSaga);
    yield takeEvery(playlistActionTypes.fetchUserPlaylists, fetchUserPlaylistsSaga);
};