import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightsList from './FlightsList';
import { getArrivals, getDepartures } from './../services/flightrackservice';
import './styles/AirportSelection.css';

class AirportSelection extends Component {
    constructor({airportList}) {
        super();

        this.state = {
            airportList,
            airportSelected: airportList ? airportList[0].airportId : null,
            action: null,
            flightsList: [],
            loading: false
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
                    <button 
                        className="btn-arrivals" 
                        aria-label="arrivals" 
                        type="button"
                        name="arrivals"
                        onClick={(event) => this.showFlightsList(event)}>
                        Arrivals
                    </button>
                    <button 
                        className="btn-departures" 
                        aria-label="departures" 
                        name="departures"
                        type="button"
                        onClick={(event) => this.showFlightsList(event)}>
                        Departures
                    </button>
                </div>
                {this.state.loading ? <p>Loading...</p> : 
                    this.state.action ? <FlightsList type={this.state.action} flightsList={this.state.flightsList}/> : null}
            </div>
        );
    }

    showFlightsList(event) {
        let flightsResponse = null;
        let type = event.target.name;
        this.setState({loading: true});

        if (type === "arrivals") {
            flightsResponse = getArrivals();
        } else if (type === "departures") {
            flightsResponse = getDepartures();
        }
        
        if (flightsResponse) {
            flightsResponse.then(response => {
                this.setState({loading: false});
                this.setState({
                    action: type,
                    flightsList: response
                });
            });
        }
    }

    getAirport(airportId) {
        return this.state.airportList.find((airport) => airport.airportId === airportId);
    }

    onChangeHandler(event) {
        this.setState({airportSelected: event.target.value, action: null});
    }
}

AirportSelection.propTypes = {
    airportList: PropTypes.array.isRequired
}

export default AirportSelection;
