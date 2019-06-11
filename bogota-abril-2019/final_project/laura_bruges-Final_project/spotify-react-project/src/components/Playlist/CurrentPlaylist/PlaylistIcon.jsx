import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { cssClasses } from './config';

const PlaylistIcon = ({ title, icon, active, onClick }) => {
    return (
        <span onClick={ onClick } className={ active ? cssClasses.active : cssClasses.regular } title={ title } ><Icon icon={ icon } /></span>
    );
};

PlaylistIcon.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object,
    active: PropTypes.bool,
    onClick: PropTypes.func
}

export default PlaylistIcon;
