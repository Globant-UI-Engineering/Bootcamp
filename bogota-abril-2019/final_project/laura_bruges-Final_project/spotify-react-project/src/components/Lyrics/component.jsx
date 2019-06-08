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
    }

    componentWillMount() {
        
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col md={9}>
                        <LyricsActionContainer
                            trackName='track01'
                            details='Lyrics available'
                            >
                                { true ? 
                                    <LyricsViewer
                                    lyricsContent='djksjdkdjdkjdskjdjkjdsjkds
                                    Weee
                                    skslkklsaskkskskskskskskkskskskskskskskskskskksksksks
                                    aaaa' />
                                    : <AddLyrics />}
                            
                        </LyricsActionContainer>
                        
                    </Col>
                    <Col md={3}>
                        <LatestAddedLyrics latestLyrics={
                            [
                                {
                                    track_id: '0001',
                                    name: 'Helena Beat',
                                    artist: 'Foster the people'
                                },
                                {
                                    track_id: '0002',
                                    name: 'Houdini',
                                    artist: 'Foster the people'
                                }
                            ]
                        } />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Lyrics;