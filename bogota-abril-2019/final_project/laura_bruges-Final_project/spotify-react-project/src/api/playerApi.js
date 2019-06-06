import API from './index'

export async function fetchNowPlaying(accessToken){
    const data = await API.get('/me/player',{ headers: {Authorization: `Bearer ${accessToken}` }}) 
    return data; 
}

export async function resumeTrack(accessToken, deviceId, playerOptions = {}){
    let data;
    if(deviceId) {
        data = await API.put(`/me/player/play?device_id=${deviceId}`, playerOptions, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    } else {
        data = await API.put('/me/player/play', playerOptions, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    }
    
    return data; 
}

export async function pauseTrack(accessToken){
    const data = await API.put('/me/player/pause', {}, { headers: { Authorization: `Bearer ${accessToken}` } }) 
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
