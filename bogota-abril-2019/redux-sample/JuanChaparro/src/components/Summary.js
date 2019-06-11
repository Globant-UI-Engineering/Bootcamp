import React from "react";
import PropTypes from "prop-types";
import "./Summary.css";

const Summary = ({done, notDone}) => {
    return (
        <div className="summary-container">
            <h3>Completed: {done}</h3>
            <h3>Not Completed: {notDone}</h3>
        </div>
    );
}

Summary.propTypes = {
    done: PropTypes.number.isRequired,
    notDone: PropTypes.number.isRequired,
}

export default Summary;
