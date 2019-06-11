import React from 'react';
import PropTypes from 'prop-types';
import { itemIcons } from './config';
import PlaylistIcon from './PlaylistIcon';

const PlaylistItem = ({ isPlayingTrack, isPlaying, name, artist, album, onResume, onPause }) => {
    return (<tr>
        { isPlaying ?
            <td className='icon-container'><PlaylistIcon {...itemIcons.pause} active={isPlayingTrack} onClick={onPause} /> </td> :
            <td className='icon-container'><PlaylistIcon {...itemIcons.play} active={isPlayingTrack} onClick={onResume} /> </td>            
        }
        <td>{name}</td>
        <td>{artist}</td>
        <td>{album}</td>
    </tr>);
}

PlaylistItem.propTypes = {
    isPlayingTrack: PropTypes.bool,
    isPlaying: PropTypes.bool,
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    onResume: PropTypes.func,
    onPause: PropTypes.func
}

export default PlaylistItem;