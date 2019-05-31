import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../styles/Player.css';
import { connect} from 'react-redux'
import { play } from 'react-icons-kit/fa/play';
import { backward } from 'react-icons-kit/fa/backward';
import { forward } from 'react-icons-kit/fa/forward';
import { pause } from 'react-icons-kit/fa/pause';
import Icon from 'react-icons-kit';
import {setNowPlaying } from '../actions/playerActions'

class Player extends React.Component {
    constructor(){
        super();
        this.state = {
            playing: false
        }
        this.handlePlayClick = this.handlePlayClick.bind(this);
    }
    componentDidMount(){
        setInterval(()=>{
            this.props.setNowPlaying(this.props.token)
        }, 1000)
    }

    handlePlayClick(){
        let nowPlaying = this.state.playing;
        this.setState({
            playing: !nowPlaying
        })
    }

    render(){
        
        return (
            <footer className='page-footer fixed-bottom shadow'>
                <div>
                    <Row>
                        <Col md={3}>
                            <Row>                                
                                <Col md={12}>
                                    <div className='song-info'>
                                        <p className='song-title'>{this.props.playing && this.props.playing.name}</p>
                                        <p>Artist</p>    
                                    </div>                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>         
                            {/* <input type="range" min="0" max={this.state.playing.item.duration_ms} value={this.state.playing.progressMs}  step="1000" onMouseUp={(event)=>this.handleChange(event)} /> */}
                                <Col md={12} className='centered'>
                                    <input className='border-0' min="0" style={{width: '100%'}} type='range'/>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col md={12} className='centered'>
                                    <span className='float-left'>00:00</span>
                                    <span className='float-right'>03:58</span>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <Button className='player-control change-track-btn btn-sm'><Icon icon={backward}></Icon></Button>
                                    <Button className='player-control play-btn btn-sm' onClick={this.handlePlayClick}> {this.state.playing ? <Icon icon={pause}></Icon> : <Icon icon={play}></Icon>} </Button>
                                    <Button className='player-control change-track-btn btn-sm'><Icon icon={forward}></Icon></Button>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col md={3}>
                            <div className='device-container'>
                                <select className='custom-select' defaultValue=''>
                                    <option value='' disabled hidden>Select your device</option>
                                    <option>Device 1</option>
                                </select>
                            </div>
                            
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}

const mapStatetoProps = state=>({
    token: state.tokenReducer.authToken,
    // durationMs: state.playerReducer.playing.item.duration_ms
    playing: state.playerReducer.playing
})
const mapDispatchToProps = dispatch =>{
    return{
        setNowPlaying: token =>{
            dispatch(setNowPlaying(token))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Player);