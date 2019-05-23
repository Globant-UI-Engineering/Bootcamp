import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getAirports } from './../services/flightrackservice';
import { LOGIN_PATH } from './../constants/routes';
import AirportSelection from './AirportSelection';
import Navbar from './Navbar';
import store from './../store';
import './styles/CountryItem.css';

class CountryItem extends Component {
    constructor({match}) {
        super();
        this._isMounted = false;

        this.state = {
            isAuthenticated: store.getState().user.isAuthenticated,
            countryCode: match.params.countryCode,
            airportList: []
        }

        store.subscribe(() => {
            if (this._isMounted) {
                this.setState({isAuthenticated: store.getState().user.isAuthenticated});
            }
        });
    }

    render() {
        if (!this.state.isAuthenticated) {
            return <Redirect to={LOGIN_PATH}/>;
        } else {
            return(
                <div>
                    <Navbar/>
                    <div className="airports-container">
                        {!this.isEmpty(this.state.airportList) ? <AirportSelection airportList={this.state.airportList}/> : <p>Loading...</p>}
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        this._isMounted = true;
        if (this.isEmpty(this.state.airportList) && this.state.isAuthenticated) {
            getAirports(this.state.countryCode).then(response => {
                if (this._isMounted) this.setState({airportList: response})
            });
        }
    }

    isEmpty(list) {
        return list.length === 0;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default CountryItem;
