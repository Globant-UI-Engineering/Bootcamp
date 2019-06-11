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
        this.setPlayerDevice = this.setPlayerDevice.bind(this);
    }

    componentDidMount(){
        this.setState({
            intervalId: this.getPlayerInfo()
        });

        this.props.getDevices(this.props.token);        
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

    setPlayerDevice(dev) {
        this.props.pauseTrack(this.props.token);
        setTimeout(1000);
        this.props.resumeTrack(this.props.token, dev);
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
                                onBackwardClick={() => this.props.previousTrack(this.props.token)}
                                onPlayClick={() => this.props.resumeTrack(this.props.token)}
                                onPauseClick={() => this.props.pauseTrack(this.props.token)}                                
                                onForwardClick={() => this.props.nextTrack(this.props.token)}
                            />
                        </Col>
                        
                        <Col md={3}>
                            { this.props.playing.deviceId && <DeviceControl options={ this.props.devices } currentDevice={ this.props.playing.deviceId } onSelectDevice={(dev) => this.setPlayerDevice(dev)} />}                             
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