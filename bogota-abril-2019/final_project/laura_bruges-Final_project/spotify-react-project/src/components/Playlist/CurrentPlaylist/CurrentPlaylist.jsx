import React from 'react';
import { Table, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PlaylistItem from './PlaylistItem';
import PlaylistControlBar from './PlaylistControlBar';
import './styles.css';

const CurrentPlaylist = ({ tracks, currTrack, currTrackPlaying, onResume, onPause }) => {
    return (
        <section>
            <Row className='playlist-content'>
                <PlaylistControlBar />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{width: '5%'}}></th>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Album</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tracks.map((track) => {
                            return (<PlaylistItem 
                                isPlayingTrack={ track.id === currTrack }
                                isPlaying={ currTrackPlaying }
                                name={ track.name }
                                artist={ track.artists[0].name }
                                album={ track.album.name }
                                onResume={ onResume }
                                onPause={ onPause }
                            />);
                        }) }
                    </tbody>
                </Table>
            </Row>            
        </section>       
    );

}

CurrentPlaylist.propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object),
    currTrack: PropTypes.string,
    currTrackPlaying: PropTypes.bool,
    onResume: PropTypes.func,
    onPause: PropTypes.func
}

export default CurrentPlaylist;