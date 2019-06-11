import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css';

const TrackInfo = ({ trackTitle, trackArtist }) => {
    return (
        <Row>
            <Col md={12}>
                <div className='song-info'>
                    <p className='song-title'>{trackTitle}</p>
                    <p>{trackArtist}</p>
                </div>
            </Col>
        </Row>
    );
};

TrackInfo.propTypes = {
    trackTitle: PropTypes.string,
    trackArtist: PropTypes.string
}


export default TrackInfo;