import API from './index'

export async function fetchDeviceList(accessToken){
    const data = await API.get('/me/player/devices',{headers:{Authorization: `Bearer ${accessToken}` }}) 
    return data; 
}