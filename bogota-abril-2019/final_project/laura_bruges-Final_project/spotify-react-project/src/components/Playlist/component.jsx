import React from 'react';
import Container from '../Container';
import { Row } from 'react-bootstrap';
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
    }

    componentWillMount() {
        this.props.fetchUserPlaylists(this.props.token);
        this.getCurrentPlaylistInfo();
    }

    getCurrentPlaylistInfo() {
        const intervalId = setInterval(
            () => {
                if(this.props.playing && this.props.playing.playlistId) {
                    this.props.fetchPlaylist(this.props.token, this.props.playlistId)
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
    
    render() {
        return (
            <Container>
                <PlaylistHeader playlistName={'Hola'} playlistDescription={'This is a description'} />
                <CurrentPlaylist tracks={
                    [
                        {
                            'id': '001',
                            'name': 'track01',
                            'album': {
                                'name': 'alb001'
                            },
                            'artists': [
                                {
                                    'name': 'art001'
                                }
                            ]
                        },
                        {
                            'id': '002',
                            'name': 'track02',
                            'album': {
                                'name': 'alb002'
                            },
                            'artists': [
                                {
                                    'name': 'art002'
                                }
                            ]
                        },
                        {
                            'id': '003',
                            'name': 'track03',
                            'album': {
                                'name': 'alb003'
                            },
                            'artists': [
                                {
                                    'name': 'art003'
                                }
                            ]
                        }
                    ]
                } currTrack='001' />
                <Row className='playlist-content'>Hola</Row>
            </Container>
        );
    }
}

export default Playlist;