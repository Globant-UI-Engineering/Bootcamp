import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css';

const LyricsInfo = ({ name, details }) => {
    return (
        <Row>
            <Col md={12}>

                <Row >
                    <Col md={12}>
                        <h2 className='d-block'>{ name }</h2>
                    </Col>                
                </Row>
                <Row>
                    <Col md={12}>
                        <p className='d-block'>
                            { details }
                        </p>
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


export default LyricsInfo;