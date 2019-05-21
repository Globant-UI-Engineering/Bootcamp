import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/AirportSelection.css';

class AirportSelection extends Component {
    constructor({airportList}) {
        super();

        this.state = {
            airportList,
            airportSelected: airportList ? airportList[0].airportId : null
        }
    }

    render() {
        const airportInformation = this.getAirport(this.state.airportSelected);

        return(
            <div>
                <select onChange={(event) => this.onChangeHandler(event)}>
                    {this.state.airportList.map((airport) => 
                        <option key={airport.airportId} value={airport.airportId}>{airport.nameAirport}</option>)}
                </select>

                <div className="airport-selected">
                    <h2>{`${airportInformation.nameAirport}`}</h2>
                    <p>
                        <span>{`Iata Code Airport: ${airportInformation.codeIataAirport}`}</span>
                        <span>{`Phone: ${airportInformation.phone ? airportInformation.phone : "-" }`}</span>
                    </p>
                    <button className="btn-arrivals" aria-label="arrivals" type="button">Arrivals</button>
                    <button className="btn-departures" aria-label="departures" type="button">Departures</button>
                </div>
            </div>
        );
    }

    getAirport(airportId) {
        return this.state.airportList.find((airport) => airport.airportId === airportId);
    }

    onChangeHandler(event) {
        this.setState({airportSelected: event.target.value});
    }
}

AirportSelection.propTypes = {
    airportList: PropTypes.array.isRequired
}

export default AirportSelection;
