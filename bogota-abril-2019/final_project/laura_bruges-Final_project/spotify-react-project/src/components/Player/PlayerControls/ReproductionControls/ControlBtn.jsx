import React from 'react';
import { Button } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import PropTypes from 'prop-types';

const ControlBtn = ({title, icon, cssClasses, onClick}) => {
    return (
        <Button title={title} className={cssClasses} onClick={onClick}><Icon icon={icon}></Icon> </Button>
    );
};

ControlBtn.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object,
    cssClasses: PropTypes.string,
    onClick: PropTypes.func
}


export default ControlBtn;