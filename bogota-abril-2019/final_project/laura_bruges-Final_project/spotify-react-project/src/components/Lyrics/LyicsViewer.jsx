import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LyricsViewer = ({ lyricsContent }) => {
    return (
        <Row>
            <Col md={12}>
                <div className='lyrics-viewer'
                dangerouslySetInnerHTML={{ __html: lyricsContent }} >
                    
                </div>
            </Col>
        </Row>
    );
};

LyricsViewer.propTypes = {
    lyricsContent: PropTypes.string
}


export default LyricsViewer;