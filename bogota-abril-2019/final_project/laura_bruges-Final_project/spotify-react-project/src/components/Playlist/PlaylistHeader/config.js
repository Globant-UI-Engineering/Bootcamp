const baseClass = 'playlist-text-container';

export const textType = {
    playlistDescTitle: 'PLAYLIST_DESC_TITLE',
    playlistName: 'PLAYLIST_NAME',
    playlistDescription: 'PLAYLIST_DESCRIPTION'

}
export const headerTexts = [
    {
        type: textType.playlistDescTitle,
        cssClasses: `${ baseClass } playlist-title`,
        text: 'Playlist'
    },
    {
        type: textType.playlistName,
        cssClasses: baseClass
    },
    {
        type: textType.playlistDescription,
        cssClasses: baseClass
    }
]