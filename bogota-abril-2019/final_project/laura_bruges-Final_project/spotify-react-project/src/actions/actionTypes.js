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
    nextTrack: 'NEXT_TRACK',
    nextTrackSuccess: 'NEXT_TRACK_SUCCESS',
    nextTrackError: 'NEXT_TRACK_ERROR',
    previousTrack: 'PREVIOUS_TRACK',
    previousTrackSuccess: 'PREVIOUS_TRACK_SUCCESS',
    previousTrackError: 'PREVIOUS_TRACK_ERROR',
    shuffleContext: 'SHUFFLE_CURR_CONTEXT',
    shuffleContextSuccess: 'SHUFFLE_CURR_CONTEXT_SUCCESS',
    shuffleContextError: 'SHUFFLE_CURR_CONTEXT_ERROR'
}

export const deviceActionTypes = {
    fetchDeviceList: 'FETCH_DEVICE_LIST',
    fetchDeviceListSuccess: 'FETCH_DEVICE_LIST_SUCCEESS',
    fetchDeviceListError: 'FETCH_DEVICE_LIST_ERROR',
}

export const userActionTypes = {
    fetchUserInfo: 'FETCH_USER_INFO',
    fetchUserInfoSuccess:'FETCH_USER_INFO_SUCCES',
    fetchUserInfoError:"FETCH_USER_INFO_ERROR"
}

export const playlistActionTypes = {
    fetchPlaylist: 'FETCH_PLAYLIST',
    fetchPlaylistSuccess: 'FETCH_PLAYLIST_SUCCESS',
    fetchPlaylistError: 'FETCH_PLAYLIST_ERROR',
    fetchUserPlaylists: 'FETCH_USER_PLAYLISTS',
    fetchUserPlaylistsSuccess: 'FETCH_USER_PLAYLISTS_SUCCESS',
    fetchUserPlaylistsError: 'FETCH_USER_ERROR'
}