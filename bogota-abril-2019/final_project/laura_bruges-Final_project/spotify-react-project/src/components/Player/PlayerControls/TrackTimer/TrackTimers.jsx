import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TimeDisplay from './TimeDisplay';
import { trackTimerType, trackTimers } from './config';

const TrackTimers = ({ progressMs, durationMs }) => {
    return (
        <Row>
            <Col md={12}>
                <TimeDisplay timeMs={ progressMs } { ...trackTimers[trackTimerType.progress] } />
                <TimeDisplay timeMs={ durationMs } { ...trackTimers[trackTimerType.duration] } />
            </Col>            
        </Row>
    );
};

TrackTimers.propTypes = {
    progressMs: PropTypes.number,
    durationMs: PropTypes.number
}


export default TrackTimers;