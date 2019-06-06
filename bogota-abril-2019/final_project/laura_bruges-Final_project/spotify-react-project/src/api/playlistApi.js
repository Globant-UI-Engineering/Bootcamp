import API from './index'

export async function fetchPlaylist(accessToken, playlistId){
    const data = await API.get(`/playlists/${ playlistId }`, { headers: { Authorization: `Bearer ${accessToken}` } }) 
    return data; 
}
