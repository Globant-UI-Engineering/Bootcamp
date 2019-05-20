import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import './styles/CountryList.css';
import { getCountries } from './../services/flightrackservice';
import store from '../store';

class CountryList extends Component {
    constructor() {
        super();
        this._isMounted = false;

        this.state = {
            isAuthenticated: store.getState().user.isAuthenticated,
            username: store.getState().user.username,
            countryList: [],
            countrySelected: '',
            submitted: false,
        }

        store.subscribe(() => {
            if (this._isMounted) {
                this.setState({
                    isAuthenticated: store.getState().user.isAuthenticated,
                    username: store.getState().user.username,
                });
            }
        });        
    }

    render() {
        if (!this.state.isAuthenticated) {
            return <Redirect to="/login"></Redirect>;
        } else {
            const countrySelect = (
                <div>
                    <select id="favcountry" onChange={(event) => this.onChangeHandler(event)}>
                        {this.state.countryList.map((country)=> 
                        <option key={country.countryId} value={country.codeIso2Country}>{country.nameCountry}</option>)}
                    </select>
                    <button type="submit" aria-label="submit" onClick={() => this.submitHandler()}>Submit</button>
                </div>
            );

            return (
                <div>
                    <Navbar/>
                    <div className="countrylist-container">
                        <label htmlFor="favcountry">{`Welcome ${this.state.username}, please select a country:`}</label>
                        {this.state.countryList.length > 0 ? countrySelect : <p>Loading...</p>}
                        {this.state.submitted ? this.goToCountry(this.state.countrySelected) : null}
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        this._isMounted = true;
        if (this.state.countryList.length === 0 && this.state.isAuthenticated) {
            getCountries().then(response => this.setState({countryList: response}));
        }
    }

    onChangeHandler(event) {
        this.setState({countrySelected: event.target.value});
    }

    submitHandler() {
        if (this.state.countrySelected === '')
            this.setState({countrySelected: this.state.countryList[0].codeIso2Country});

        this.setState({submitted: true});
    }

    goToCountry(countryCode) {
        return <Redirect to={`/countries/${countryCode}`}></Redirect>;
    }   

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default CountryList;
