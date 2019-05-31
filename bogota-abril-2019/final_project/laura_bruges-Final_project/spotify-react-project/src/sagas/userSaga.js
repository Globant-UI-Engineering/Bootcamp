import { takeEvery, call, put } from 'redux-saga/effects'
import { userActionTypes } from '../actions/actionTypes';
import {fetchUser} from '../api/userApi'

function* setUser(action){
    try{
        const response  = yield call(fetchUser, action.payload)
        console.log('RESPONSE', response)
        yield put({
            type:userActionTypes.fetchUserInfoSuccess,
            payload: response.data
        })
    }
    catch(e){
        console.log("ERROR IN SAGA",e)
    }
}

export default function* userSaga(){
    yield takeEvery(userActionTypes.fetchUserInfo, setUser);
}