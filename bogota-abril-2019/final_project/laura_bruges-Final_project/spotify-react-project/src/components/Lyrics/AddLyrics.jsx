import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddLyrics = ({ onClick }) => {
    return (
        <Row>
            <Col md={12}>
                <Row>
                    <textarea className='form-control lyrics-area' name="lyrics-text-area" id='lyrics-text-area'></textarea>
                </Row>
                <Row className='lyrics-btn-container'>
                    <Button variant='success' onClick={ onClick }>Submit lyrics</Button>
                </Row>
            </Col>
        </Row>
    );
};

AddLyrics.propTypes = {
    onClick: PropTypes.func
}


export default AddLyrics;