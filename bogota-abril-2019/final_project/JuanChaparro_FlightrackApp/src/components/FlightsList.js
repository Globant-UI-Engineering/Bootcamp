import React from 'react';
import PropTypes from 'prop-types';
import ArrivalIcon from './../images/arrival-icon.png';
import DepartureIcon from './../images/departure-icon.png';
import { getScheduledTime } from './../utils/dateconstructor';
import './styles/FlightsList.css';

const FlightsList = ({type, flightsList}) => (
    <div className="flights-container">
        <h2>{type}</h2>

        {flightsList.map((flight, index) => (
            <div className="flight-description" key={index}>
                {isArrival(flight.type) ? <img src={ArrivalIcon} alt="Arrival-Icon"/> :  <img src={DepartureIcon} alt="Departure-Icon"/>}
                <p>
                    <span className="info"><span className="key">Status: </span><span className="value">{flight.status}</span></span>
                    <span className="info"><span className="key">Airline: </span><span className="value">{flight.airline.name}</span></span>
                    <span className="info"><span className="key">Flight Number: </span><span className="value">{flight.flight.iataNumber}</span></span>
                    <span className="info"><span className="key">Gate: </span>
                        <span className="value">{isArrival(flight.type) ? flight.arrival.gate : flight.departure.gate}</span>
                    </span>
                    <span className="info"><span className="key">Terminal: </span>
                        <span className="value">{isArrival(flight.type) ? flight.arrival.terminal : flight.departure.terminal}</span>
                    </span>
                    <span className="info"><span className="key">Scheduled Time: </span>
                        <span className="value">{isArrival(flight.type) ? 
                            getScheduledTime(flight.arrival.scheduledTime) : getScheduledTime(flight.departure.scheduledTime)}</span>
                    </span>
                </p>
            </div>
        ))}

    </div>
);

const isArrival = type => {
    return type === "arrival";
}

FlightsList.propTypes ={
    type: PropTypes.string.isRequired,
    flightsList: PropTypes.array.isRequired
}

export default FlightsList;
