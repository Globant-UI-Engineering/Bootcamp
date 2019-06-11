import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { reprodControlType, reprodControls } from './config';
import ControlBtn from './ControlBtn';
import './styles.css';

const ReproductionControls = ({ isPlaying, onBackwardClick, onPlayClick, onPauseClick, onForwardClick }) => {
    return (
        <Row>
            <Col md={12}>
                <ControlBtn {...reprodControls[reprodControlType.backwardBtn] } 
                    onClick={ onBackwardClick } />
                
                { isPlaying ? 
                    <ControlBtn {...reprodControls[reprodControlType.pauseBtn] } 
                        onClick={ onPauseClick } /> :  
                    <ControlBtn {...reprodControls[reprodControlType.playBtn] } 
                        onClick={ onPlayClick } />
                } 
                               
                <ControlBtn {...reprodControls[reprodControlType.forwardBtn] } 
                    onClick={ onForwardClick } />
            </Col>
        </Row>
    );
};

ReproductionControls.propTypes = {
    isPlaying: PropTypes.bool,
    onBackwardClick: PropTypes.func,
    onPlayClick: PropTypes.func,
    onPauseClick: PropTypes.func,
    onForwardClick: PropTypes.func
}


export default ReproductionControls;