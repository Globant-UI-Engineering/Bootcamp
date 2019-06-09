import React from 'react';
import './Alerta.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const exclamationTriangle = <FontAwesomeIcon icon={faExclamationTriangle} color="orange" />;

const Alerta = ({ mensaje }) => {
    return (
        <div className="alertContainer" >
            <h1>{exclamationTriangle}</h1>
            <p>{mensaje}</p>
        </div>
    );
}

export default Alerta;



