import API from './index'

export async function fetchPlaylist(accessToken, playlistId){
    const data = await API.get(`/playlists/${ playlistId }`, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    return data; 
}

export async function fetchUserPlaylists(accessToken){
    const data = await API.get(`/me/playlists`, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    return data; 
}