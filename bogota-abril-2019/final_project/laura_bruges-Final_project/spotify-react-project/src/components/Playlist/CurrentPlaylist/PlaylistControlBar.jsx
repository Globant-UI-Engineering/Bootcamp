import React from 'react';
import PropTypes from 'prop-types';
import { itemIcons } from './config';
import PlaylistIcon from './PlaylistIcon';

const PlaylistControlBar = ({ isShuffled, onPlay, onShuffle }) => {
    return (
        <div className='playlist-menu-bar'>
            <PlaylistIcon {...itemIcons.play} onClick={onPlay} />
            <PlaylistIcon {...itemIcons.random} active={ isShuffled } onClick={ onShuffle } />
        </div>
    );
};

PlaylistControlBar.propTypes = {
    isShuffled: PropTypes.bool,
    onPlay: PropTypes.func,
    onShuffle: PropTypes.func
}

export default PlaylistControlBar;
