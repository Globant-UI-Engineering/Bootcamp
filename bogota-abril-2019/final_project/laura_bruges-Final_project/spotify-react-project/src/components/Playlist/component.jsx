import React from 'react';
import Container from '../PageStructure/Container';
import PlaylistHeader from './PlaylistHeader/PlaylistHeader';
import CurrentPlaylist from './CurrentPlaylist/CurrentPlaylist';

import './styles.css';

class Playlist extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: ''
        }
        this.getCurrentPlaylistInfo = this.getCurrentPlaylistInfo.bind(this);
        this.playTrackFromPlaylist = this.playTrackFromPlaylist.bind(this);
    }

    componentWillMount() {
        this.props.fetchUserPlaylists(this.props.token);
        this.getCurrentPlaylistInfo();
    }

    getCurrentPlaylistInfo() {
        const intervalId = setInterval(
            () => {
                if(this.props.playing && this.props.playing.currPlaylistId) {
                    this.props.fetchPlaylist(this.props.token, this.props.playing.currPlaylistId);
                }                
            }, 
            1000
        );

        this.setState({
            intervalId: intervalId
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    playTrackFromPlaylist(trackId) {
        if(trackId === this.props.playing.trackId) {
            this.props.resumeTrack(this.props.token);    
        } else {
            this.props.resumeTrack(this.props.token, this.props.playing.currPlaylistId, trackId);
        }
        
    }
    
    render() {
        return (
            <Container>
                <PlaylistHeader playlistName={ this.props.currPlaylist.name } playlistDescription={ this.props.currPlaylist.description } />
                <CurrentPlaylist tracks={ this.props.currPlaylist.items } 
                    isShuffled={this.props.playing.isShuffled} 
                    isRepeatActive={ this.props.playing.repeatState === 'context' }
                    currTrack={this.props.playing.trackId} 
                    currTrackPlaying={ this.props.playing.isPlaying } 
                    onResume={ (trackId) => this.playTrackFromPlaylist(trackId) } 
                    onPause={() => this.props.pauseTrack(this.props.token) }
                    onRepeat={() => this.props.setRepeatStateContext(this.props.token, this.props.playing.repeatState) }
                    onShuffle={() => this.props.shuffleContext(this.props.token, this.props.playing.isShuffled) }  />
                
            </Container>
        );
    }
}

export default Playlist;