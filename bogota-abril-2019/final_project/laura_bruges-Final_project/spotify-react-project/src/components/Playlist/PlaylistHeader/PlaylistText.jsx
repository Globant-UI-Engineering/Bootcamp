import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { textType } from './config';

const PlaylistText = ({ type, cssClasses, text }) => {
    let textElement;
    switch(type) {
        case textType.playlistDescTitle:
            textElement = <h3>{text}</h3>;
            break;
        case textType.playlistName:
            textElement = <h2>{text}</h2>;
            break;
        case textType.playlistDescription:
            textElement = <p className='description-p'>{text}</p>;
            break;
        default:
            break;
    }
    return (
        <Row className={cssClasses}>
            {textElement}
        </Row>
    );
};

PlaylistText.propTypes = {
    type: PropTypes.string,
    cssClasses: PropTypes.string,
    text: PropTypes.string
}

export default PlaylistText;