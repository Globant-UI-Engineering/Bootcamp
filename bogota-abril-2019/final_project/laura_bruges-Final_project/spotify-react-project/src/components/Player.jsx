import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Player.css';
import { play } from 'react-icons-kit/fa/play';
import { backward } from 'react-icons-kit/fa/backward';
import { forward } from 'react-icons-kit/fa/forward';
import { pause } from 'react-icons-kit/fa/pause';
import Icon from 'react-icons-kit';

class Player extends React.Component {
    constructor(){
        super();
        this.state = {
            playing: false
        }
        this.handlePlayClick = this.handlePlayClick.bind(this);
    }

    handlePlayClick(){
        let nowPlaying = this.state.playing;
        this.setState({
            playing: !nowPlaying
        })
    }

    render(){
        return (
            <footer className='page-footer fixed-bottom'>
                <div>
                    <Row>
                        <Col md={3}>
                            <Row style={{'height': '100%'}}>
                                
                                <Col md={12}>
                                    <div style={{marginTop:'5%', marginBottom:'5%'}}>
                                        <p className='song-title'>Title</p>
                                        <p>Artist</p>    
                                    </div>                                    
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>         
                                <Col md={12} className='centered'>
                                    <input style={{width: '100%'}} type='range'/>
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
                                    <Button className='player-control change-track-btn'><Icon icon={backward}></Icon></Button>
                                    <Button className='player-control play-btn' onClick={this.handlePlayClick}> {this.state.playing ? <Icon icon={pause}></Icon> : <Icon icon={play}></Icon>} </Button>
                                    <Button className='player-control change-track-btn'><Icon icon={forward}></Icon></Button>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col md={3}>

                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}

export default Player;