import API from './index'

export async function fetchNowPlaying(accessToken){
    const data = await API.get('/me/player',{ headers: {Authorization: `Bearer ${accessToken}` }}) 
    return data; 
}

export async function resumeTrack(accessToken, deviceId, playlistId, offsetTrackId){
    let playerOptions = {};
    let data;

    if(playlistId) {
        playerOptions['context_uri'] = `spotify:playlist:${ playlistId }`;
        playerOptions['offset'] = `spotify:track:${ offsetTrackId }`
    }

    if(deviceId) {
        data = await API.put(`/me/player/play?device_id=${deviceId}`, playerOptions, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    } else {
        data = await API.put('/me/player/play', playerOptions, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    }
    
    return data; 
}

export async function pauseTrack(accessToken, playerOptions = {}){
    const data = await API.put('/me/player/pause', playerOptions, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    return data; 
}

export async function nextTrack(accessToken){
    const data = await API.post('/me/player/next', {}, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    return data; 
}

export async function previousTrack(accessToken){
    const data = await API.post('/me/player/previous', {}, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    return data; 
}

export async function shuffleContext(accessToken, isShuffled){
    const data = await API.post(`/me/player/shuffle?state=${ !isShuffled }`, {}, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    return data; 
}
