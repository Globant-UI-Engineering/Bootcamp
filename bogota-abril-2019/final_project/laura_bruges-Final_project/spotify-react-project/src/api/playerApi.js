import API from './index'

export async function fetchNowPlaying(accessToken){
    const data = await API.get('/player',{headers:{Authorization: `Bearer ${accessToken}` }}) 
    return data; 
}


/*
axios.get('https://api.spotify.com/v1/me/player', { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
*/