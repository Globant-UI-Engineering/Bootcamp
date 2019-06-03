import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TrackInfo from './TrackInfo/TrackInfo';
import SeekBar from './PlayerControls/SeekBar/SeekBar';
import TrackTimers from './PlayerControls/TrackTimer/TrackTimers';
import ReproductionControls from './PlayerControls/ReproductionControls/ReproductionControls';
import './styles.css';
import DeviceControl from './DeviceControl/DeviceControl';

class Player extends React.Component {
    constructor(){
        super();
        this.getPlayerInfo = this.getPlayerInfo.bind(this);
    }

    componentDidMount(){
        this.setState({
            intervalId: this.getPlayerInfo()
        })        
    }

    componentWillUnmount() {
        if(this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
    }

    getPlayerInfo() {
        return setInterval(() =>{
            this.props.setNowPlaying(this.props.token)
        }, 500)
    }

    render() {        
        return (
            <footer className='page-footer fixed-bottom shadow'>
                <div>
                    <Row>
                        <Col md={3}>
                            <TrackInfo
                                trackTitle={ this.props.playing.name }
                                trackArtist={ this.props.playing.artist }
                            />  
                        </Col>
                        <Col md={6}>
                            <SeekBar
                                progressMs={ this.props.playing.progressMs } 
                                durationMs={ this.props.playing.durationMs }
                            />
                            <TrackTimers
                                progressMs={ this.props.playing.progressMs } 
                                durationMs={ this.props.playing.durationMs }
                            />
                            <ReproductionControls 
                                isPlaying={ this.props.playing.isPlaying }
                                onBackwardClick={() => alert("Click on back!")}
                                onPlayClick={() => this.props.resumeTrack(this.props.token)}
                                onPauseClick={() => this.props.pauseTrack(this.props.token)}                                
                                onForwardClick={() => alert("Click on forward!")}
                            />
                        </Col>
                        
                        <Col md={3}>
                            <DeviceControl options={ [ { id: 'dev1', name: 'DEVICE 1'}] } onSelectDevice={(dev) => alert(`Hello ${dev}!`)} />                            
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}

Player.propTypes = {
    token: PropTypes.string,
    playing: PropTypes.object
}

export default Player;