import { takeEvery, call, put } from 'redux-saga/effects';
import { playerActionTypes } from '../actions/actionTypes'
import { fetchNowPlaying } from '../api/playerApi'

function* fetchNowPlayingSaga(action) {
    const data = yield call(fetchNowPlaying, action.payload);
    console.log(data);
    yield put({
        type:playerActionTypes.fetchNowPlayingSuccess,
        payload: data.data.item
    })
    return data;
}

export default function* playerSaga( ) {
    yield takeEvery(playerActionTypes.fetchNowPlaying, fetchNowPlayingSaga)
};