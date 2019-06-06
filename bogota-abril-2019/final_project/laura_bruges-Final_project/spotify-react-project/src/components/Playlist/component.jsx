import React from 'react';
import Container from '../Container';

class Playlist extends React.Component {
    componentWillMount() {
        this.props.fetchPlaylist(this.props.token, this.props.playlistId);
    }
    
    render() {
        return (
            <Container />
        );
    }
}

export default Playlist;