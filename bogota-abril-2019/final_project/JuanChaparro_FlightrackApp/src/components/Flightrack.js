import React, { Component } from 'react';
import NavBar from './Navbar';
import { Redirect } from 'react-router-dom';
import { getFlights } from './../services/flightrackservice';
import { LOGIN_PATH } from './../constants/routes';
import { getImageByCode } from './../utils/airlinesimages';
import store from '../store';
import './styles/Flightrack.css';

class Flightrack extends Component {
    constructor() {
        super();
        this._isMounted = false;

        this.state = {
            isAuthenticated: store.getState().user.isAuthenticated,
            flightsList: [],
            inputFlightCode: null,
            flightsFilter: [],
            loading: false,
        }

        store.subscribe(() => {
            if (this._isMounted) {
                this.setState({isAuthenticated: store.getState().user.isAuthenticated});
            }
        })
    }

    render() {
        if (!this.state.isAuthenticated) {
            return <Redirect to={LOGIN_PATH}/>;
        } else {
            return(
                <div>
                    <NavBar/>
                    <div className="flightrack-container">
                        <label htmlFor="flightCode">Flight Code: </label>
                        <input 
                            id="flightCode" 
                            type="text" 
                            name="flightCode" 
                            placeholder="WN1209" 
                            aria-label="flight code"
                            maxLength="7"
                            autoComplete="off"
                            disabled={this.state.loading}
                            defaultValue={this.state.loading ? "Loading..." : ""}
                            onChange={(event) => this.onChangeHandler(event)}/>
                            {this.showFlights()}
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({loading: true});
        if (this.state.isAuthenticated) {
            getFlights().then(response => {
                if (this._isMounted) this.setState({flightsList: response, loading: false});
            });
        }
    }

    onChangeHandler(event) {
        let inputValue = event.target.value.toUpperCase().trim();

        this.setState({
            inputFlightCode: inputValue ? inputValue : null,
            flightsFilter: this.state.flightsList.filter((flight) => 
                flight.flight.iataNumber.includes(inputValue) && inputValue)
        });
    }

    showFlights() {
        if (this.isEmpty(this.state.flightsFilter) && this.state.inputFlightCode) {
            return <p className="message-flightrack">We're sorry! we can't find that flight.</p>
        } else if (!this.isEmpty(this.state.flightsFilter)) {
            return(
                <div>
                    <p className="message-flightrack">Flight(s) found.</p>
                    <div className="flights-info">
                        {this.state.flightsFilter.map((flight) => (
                            <div key={flight.flight.iataNumber} className="flights-found">
                                <img src={getImageByCode(flight.airline.iataCode)} alt="airline-icon"></img>
                                <p>
                                    <span>ID: {flight.flight.iataNumber}</span>
                                    <span>Status: {flight.status}</span>
                                    <span>Route: {flight.departure.iataCode} - {flight.arrival.iataCode}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }

    isEmpty(list) {
        return list.length === 0;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default Flightrack;
