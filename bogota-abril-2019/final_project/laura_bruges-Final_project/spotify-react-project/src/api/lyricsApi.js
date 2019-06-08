import API from './lyricsIndex'

export async function addLyrics(payload) {    
    const data = await API.post('/addLyrics', payload);
    return data; 
}

export async function getTrackLyrics(trackId) {
    const data = await API.get(`/${ trackId }`);
    return data; 
}

export async function getLatestLyrics() {
    const data = await API.get(`/recent/5`);
    return data; 
}