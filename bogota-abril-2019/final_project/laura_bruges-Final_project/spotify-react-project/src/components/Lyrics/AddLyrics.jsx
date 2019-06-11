import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddLyrics extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            currLyrics: ''
        }
        this.addLyricsToCurrTrack = this.addLyricsToCurrTrack.bind(this);
        this.updateLyricsValue = this.updateLyricsValue.bind(this);
    }

    addLyricsToCurrTrack(playing, addLyrics, userName) {
        console.log("PLAY", playing, "LYRICS", this.state.currLyrics, "USER", userName)
        addLyrics(playing.trackId, playing.name, playing.artist, this.state.currLyrics, userName);        
    }

    updateLyricsValue(event) {
        this.setState({
            currLyrics: event.target.value
        })
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Row>
                        <textarea onChange={(event) => this.updateLyricsValue(event)} value={ this.state.currLyrics } className='form-control lyrics-area' name="lyrics-text-area" id='lyrics-text-area'></textarea>
                    </Row>
                    <Row className='lyrics-btn-container'>
                        <Button variant='success' onClick={ () => this.addLyricsToCurrTrack(this.props.playing, this.props.addLyrics, this.props.userName)}>Submit lyrics</Button>
                    </Row>
                </Col>
            </Row>
        );
    }
};

AddLyrics.propTypes = {
    playing: PropTypes.object,
    addLyrics: PropTypes.func,
    userName: PropTypes.string
}


export default AddLyrics;