export const tokenActTypes = {
    setToken: 'SET_TOKEN'
};

export const playerActionTypes = {
    fetchNowPlaying: 'FETCH_NOW_PLAYING',
    fetchNowPlayingSuccess: 'FETCH_NOW_PLAYING_SUCCESS',
    fetchNowPlayingError: 'FETCH_NOW_PLAYING_ERROR',
    resumeTrack: 'PLAY_TRACK',
    resumeTrackSuccess: 'PLAY_TRACK_SUCCESS',
    resumeTrackError: 'PLAY_TRACK_ERROR',
    pauseTrack: 'PAUSE_TRACK',
    pauseTrackSuccess: 'PAUSE_TRACK_SUCCESS',
    pauseTrackError: 'PAUSE_TRACK_ERROR',
}

export const userActionTypes = {
    fetchUserInfo: 'FETCH_USER_INFO',
    fetchUserInfoSuccess:'FETCH_USER_INFO_SUCCES',
    fetchUserInfoError:"FETCH_USER_INFO_ERROR"
}