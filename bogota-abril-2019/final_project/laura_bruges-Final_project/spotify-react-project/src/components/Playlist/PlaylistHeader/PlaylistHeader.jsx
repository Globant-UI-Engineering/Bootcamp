import React from 'react';
import PropTypes from 'prop-types';
import { headerTexts, textType } from './config';
import PlaylistText from './PlaylistText';
import './styles.css';

const PlaylistHeader = ({ playlistName, playlistDescription }) => {
    return(
        <header>
            { headerTexts.map((plText) => {
                switch(plText.type) {
                    case textType.playlistName:                        
                        return <PlaylistText {...plText} text={ playlistName }/>
                    case textType.playlistDescription:
                        return <PlaylistText {...plText} text={ playlistDescription }/>
                    default:
                        return <PlaylistText {...plText} />
                }
            }) }
        </header>
    );

}

PlaylistHeader.propTypes = {
    playlistName: PropTypes.string,
    playlistDescription: PropTypes.string
}

export default PlaylistHeader;