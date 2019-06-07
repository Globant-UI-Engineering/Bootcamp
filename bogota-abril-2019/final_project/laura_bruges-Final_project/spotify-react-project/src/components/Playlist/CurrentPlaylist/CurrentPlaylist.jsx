import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PlaylistItem from './PlaylistItem';
import PlaylistControlBar from './PlaylistControlBar';
import './styles.css';

const CurrentPlaylist = ({ tracks, currTrack, currTrackPlaying, isShuffled, isRepeatActive, onResume, onPause, onRepeat, onShuffle }) => {
    
    return (
        <section>
            <Row className='playlist-content'>
                {/*<PlaylistControlBar />*/}
                <Col md={12}>
                    <Row>
                        <PlaylistControlBar 
                            isShuffled={ isShuffled } 
                            isRepeatActive={ isRepeatActive }
                            onRepeat={ onRepeat }
                            onShuffle={ onShuffle } />
                    </Row>
                    <Row className="table-container">
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
                                { tracks.map((item) => {
                                    let track = item.track;
                                    return (<PlaylistItem 
                                        isPlayingTrack={ track.id === currTrack }
                                        isPlaying={ track.id === currTrack && currTrackPlaying }
                                        name={ track.name }
                                        artist={ track.artists[0].name }
                                        album={ track.album.name }
                                        onResume={ () => onResume(track.id) }
                                        onPause={ onPause }
                                    />);
                                }) }
                            </tbody>
                        </Table>
                    </Row>
                </Col>
                
            </Row>            
        </section>       
    );

}

CurrentPlaylist.propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object),
    currTrack: PropTypes.string,
    currTrackPlaying: PropTypes.bool,
    isRepeatActive: PropTypes.bool,
    isShuffled: PropTypes.bool,
    onResume: PropTypes.func,
    onPause: PropTypes.func,
    onRepeat: PropTypes.func,
    onShuffle: PropTypes.func
}

export default CurrentPlaylist;