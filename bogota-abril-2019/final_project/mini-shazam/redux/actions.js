export function addSong(song){
    return {
        type: "ADD_SONG",
        song
    }
}

export function removeSong(id){
    return {
        type: "REMOVE_SONG",
        id
    }
}

export function initSongs(allSongs){
    console.log(allSongs)
    return {
        type: "INIT_SONGS",
        songs: allSongs
    }
}