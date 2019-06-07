import React from 'react';
import PropTypes from 'prop-types';
import { itemIcons } from './config';
import PlaylistIcon from './PlaylistIcon';

const PlaylistControlBar = ({ isShuffled, isRepeatActive, onRepeat, onShuffle }) => {
    return (
        <div className='playlist-menu-bar'>
            <PlaylistIcon {...itemIcons.random} active={ isShuffled } onClick={ onShuffle } />
            <PlaylistIcon {...itemIcons.repeat} active={ isRepeatActive } onClick={ onRepeat } />            
        </div>
    );
};

PlaylistControlBar.propTypes = {
    isShuffled: PropTypes.bool,
    isRepeatActive: PropTypes.bool,
    onRepeat: PropTypes.func,
    onShuffle: PropTypes.func
}

export default PlaylistControlBar;
