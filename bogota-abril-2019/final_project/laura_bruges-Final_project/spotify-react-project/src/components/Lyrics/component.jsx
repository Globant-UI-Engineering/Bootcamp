import React from 'react';
import Container from '../PageStructure/Container';
import AddLyrics from './AddLyrics';
import LyricsActionContainer from './LyricsActionContainer';
import LyricsViewer from './LyicsViewer';
import LatestAddedLyrics from './LatestAddedLyrics';
import './styles.css';
import { Row, Col } from 'react-bootstrap';

class Lyrics extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: ''
        }
        this.checkCurrentTrackLyrics = this.checkCurrentTrackLyrics.bind(this);
    }

    componentWillMount() {
        this.checkCurrentTrackLyrics();
        this.props.getLatestLyrics();
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    checkCurrentTrackLyrics() {
        let intervalId = setInterval(() => {
            this.props.getTrackLyrics(this.props.playing.trackId);
        }, 5000);

        this.setState({
            intervalId: intervalId
        })
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        <LyricsActionContainer
                            trackName={this.props.playing.name}
                            details={this.props.currTrackLyrics ? 'Lyrics available': 'Add lyrics'}
                            >
                                { (this.props.currTrackLyrics) ? 
                                    <LyricsViewer
                                    lyricsContent = {this.props.currTrackLyrics.lyrics } />
                                    : <AddLyrics playing={ this.props.playing } addLyrics={ this.props.addLyrics } userName={ this.props.userName } />}
                            
                        </LyricsActionContainer>
                        
                    </Col>
                    <Col md={3}>
                        <LatestAddedLyrics latestLyrics={ this.props.latestLyrics } onItemClick={ this.props.resumeTrack } />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Lyrics;