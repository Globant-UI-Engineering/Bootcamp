import { takeEvery, call, put } from 'redux-saga/effects';
import { deviceActionTypes } from '../actions/actionTypes'
import { fetchDeviceList } from '../api/deviceApi'

function* fetchDeviceListSaga(action) {
    const data = yield call(fetchDeviceList, action.payload);    
    const devicePayload = data.data.devices;
    
    yield put({
        type: deviceActionTypes.fetchDeviceListSuccess,
        payload: devicePayload
    })

    return data;
}

export default function* playerSaga() {
    yield takeEvery(deviceActionTypes.fetchDeviceList, fetchDeviceListSaga);
};