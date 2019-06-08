import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LyricsInfo from './LyricsInfo';
import PropTypes from 'prop-types';

const AddLyrics = ({ trackName, details, children }) => {
    return (
        <Row className='lyrics-container'>
            <Col md={12}>
                <Row>
                    <Col md={12}>
                        <LyricsInfo 
                            name={ trackName }
                            details={ details }
                        />
                    </Col>                    
                </Row>
                <Row className='lyrics-content'>
                    <Col md={12}>
                        { children }
                    </Col>                    
                </Row>
                
            </Col>
        </Row>
    );
};

LyricsInfo.propTypes = {
    name: PropTypes.string,
    details: PropTypes.string
}

export default AddLyrics;