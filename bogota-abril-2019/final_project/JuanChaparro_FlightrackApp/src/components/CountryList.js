import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCountries } from './../services/flightrackservice';
import { LOGIN_PATH, TRACKER } from './../constants/routes';
import CountrySelection from './CountrySelection';
import Navbar from './Navbar';
import store from '../store';
import './styles/CountryList.css';

class CountryList extends Component {
    constructor() {
        super();
        this._isMounted = false;

        this.state = {
            isAuthenticated: store.getState().user.isAuthenticated,
            countryList: [],
            goToTracker: false
        }

        store.subscribe(() => {
            if (this._isMounted) {
                this.setState({isAuthenticated: store.getState().user.isAuthenticated,});
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
                    <div className="countrylist-container">
                        <label htmlFor="favcountry">{"Flights Schedules by Country:"}</label>
                        {!this.isEmpty(this.state.countryList) ? <CountrySelection countryList={this.state.countryList}/> : <p>Loading...</p>}
                    </div>
                    <hr/>
                    <div className="trackflights-container">
                        <label>{"Track Flights:"}</label>
                        <button className="btn-home" type="button" aria-label="track" onClick={() => this.trackerBtnHandler()}>Track It Now!</button>
                        {this.state.goToTracker ? <Redirect to={TRACKER}/> : null}
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        this._isMounted = true;
        if (this.isEmpty(this.state.countryList) && this.state.isAuthenticated) {
            getCountries().then(response => {
                if (this._isMounted) this.setState({countryList: response})
            });
        }
    }

    isEmpty(list) {
        return list.length === 0;
    }

    trackerBtnHandler() {
        this.setState({goToTracker: true})
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default CountryList;
