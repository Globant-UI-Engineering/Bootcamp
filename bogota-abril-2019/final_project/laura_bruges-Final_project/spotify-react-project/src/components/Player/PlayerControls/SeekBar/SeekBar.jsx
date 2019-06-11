import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css';

const SeekBar = ({ progressMs, durationMs }) => {
    return (
        <Row>
            <Col md={12} className='centered'>
                <input type='range' className='border-0 seek-bar' min='0' max={durationMs} step='1000' value={ progressMs }  />
            </Col>
        </Row>
    );
};

SeekBar.propTypes = {
    progressMs: PropTypes.number,
    durationMs: PropTypes.number
}


export default SeekBar;