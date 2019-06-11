import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LatestAddedLyrics = ({ latestLyrics, onItemClick, token }) => {
    return (
        <Row className='lyrics-list-container'>
            <Col md={12}>
                <Row>
                    <Col md={12}>
                        <h4>Recently added</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul className='lyrics-list'>
                            { latestLyrics.map((lyrics) =>
                                {
                                    return <li title={`${ lyrics.name } - ${ lyrics.artist }`} onClick={() => onItemClick(token, lyrics.track_id)} className='lyrics-item'>{ lyrics.name }</li>;
                                }) }
                        </ul>
                        
                    </Col>

                </Row>

            </Col>
            
            
        </Row>
    );
};

LatestAddedLyrics.propTypes = {
    latestLyrics: PropTypes.arrayOf(PropTypes.object),
    onItemClick: PropTypes.func,
    token: PropTypes.string    
}


export default LatestAddedLyrics;