import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { getAirports } from './../services/flightrackservice';
import store from './../store';
import './styles/CountryItem.css';

class CountryItem extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;

        this.state = {
            isAuthenticated: store.getState().user.isAuthenticated,
            countryCode: props.match.params.countryCode,
            airportList: [],
            airportSelected: '',
            successfulResponse: false,
            buttonClicked: false,
        }

        store.subscribe(() => {
            if (this._isMounted) {
                this.setState({
                    isAuthenticated: store.getState().user.isAuthenticated,
                });
            }
        });
    }

    render() {
        if (!this.state.isAuthenticated) {
            return <Redirect to="/login"></Redirect>
        } else {
            const airportSelect = (
                <div>
                    <select onChange={(event) => this.onChangeHandler(event)}>
                        {this.state.airportList.map((airport)=> 
                        <option key={airport.airportId} value={airport.airportId}>{airport.nameAirport}</option>)}
                    </select>
                </div>
            );

            return (
                <div>
                    <Navbar/>
                    <div className="airports-container">
                        {this.state.airportList.length > 0 ? airportSelect : <p>Loading...</p>}
                    </div>
                    {this.state.successfulResponse ? this.showAirport() : null}
                </div>
            );
        }
    }

    showAirport() {
        let airportInfo = 
            this.state.airportList.find(airport => airport.airportId === this.state.airportSelected);

        return (
            <div className="airport-selected">
                <h2>{`${airportInfo.nameAirport}`}</h2>
                <p>
                    <span>{`Iata Code Airport: ${airportInfo.codeIataAirport}`}</span>
                    <span>{`Phone: ${airportInfo.phone ? airportInfo.phone : "-" }`}</span>
                </p>
                <button className="btn-arrivals" type="button">Arrivals</button>
                <button className="btn-departures" type="button">Departures</button>
            </div>
        );
    }

    componentDidMount() { 
        this._isMounted = true;
        if (this.state.airportList.length === 0 && this.state.isAuthenticated) {
            getAirports(this.state.countryCode).then(response => {
                if (response.error) {
                    this.setState({
                        successfulResponse: false,
                    });
                } else {
                    this.setState({
                        airportList: response,
                    });
                }
            });
        }
    }

    componentDidUpdate() {
        if (this.state.airportSelected === '') {
            this.setState({
                airportSelected: this.state.airportList[0].airportId,
                successfulResponse: true
            });
        }
    }

    onChangeHandler(event) {
        this.setState({
            airportSelected: event.target.value,
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default CountryItem;
