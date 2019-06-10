import API from './lyricsIndex'

export async function addLyrics(payload) {    
    const data = await API.post('/addLyrics', payload, {headers: {
        'Access-Control-Allow-Origin': '*'
    }});
    return data; 
}

export async function getTrackLyrics(trackId ) {
    const data = await API.get(`/${ trackId }`, {headers: {
        'Access-Control-Allow-Origin': '*'
    }});
    console.log("chjjkjecdhljrfhjfrj", data);
    return data; 
}

export async function getLatestLyrics() {
    const data = await API.get(`/recent/5`, {headers: {
        'Access-Control-Allow-Origin': '*'
    }});
    return data; 
}