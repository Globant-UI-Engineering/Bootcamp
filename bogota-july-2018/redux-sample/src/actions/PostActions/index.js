import {
  POST_FETCH_SUCCESS
} from '../actionTypes';
import { fetchPostsFromAPI } from '../../API';

/*
export function flightScheduleFetchSuccess(schedule) {
  return {
    type: FLIGHT_SCHEDULE_FETCH_SUCCESS,
    schedule: schedule
  };
}

export function flightScheduleFetchLoading(isLoading) {
  return {
    type: FLIGHT_SCHEDULE_LOADING,
    isLoading: isLoading
  };
}

export function getFlightSchedule(ac) {
  return (dispatch) => {

    const onResponse = (response) => {
      if (response.status !== 200) throw Error(response.statusText);
      return response;
    }

    const onSuccess = (response) => dispatch(flightScheduleFetchSuccess(response.data));

    dispatch(flightScheduleFetchLoading(true));
    return getFlightSchedulebyNoseNumberAPI(ac)
      .then(onResponse)
      .then(onSuccess);
  };
}
*/
