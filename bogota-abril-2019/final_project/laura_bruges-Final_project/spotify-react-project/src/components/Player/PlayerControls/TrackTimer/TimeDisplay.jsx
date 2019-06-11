import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimeDisplay = ({ timeMs, cssClasses }) => {
    return (
        <span className={ cssClasses }>{ convertToDurationFormat(timeMs) }</span>
    );
};

function convertToDurationFormat(timeMs) {
    const duration = moment.duration(timeMs);
    
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    const padTime = (time) => `${('0' + time).slice(-2)}`;
    return `${padTime(minutes)}:${padTime(seconds)}`;
}

TimeDisplay.propTypes = {
    timeMs: PropTypes.number,
    cssClasses: PropTypes.string
}


export default TimeDisplay;