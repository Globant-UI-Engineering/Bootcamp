import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCountries } from './../services/flightrackservice';
import { LOGIN_PATH } from './../constants/routes';
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
            username: store.getState().user.username,
            countryList: []
        }

        store.subscribe(() => {
            if (this._isMounted) {
                this.setState({
                    isAuthenticated: store.getState().user.isAuthenticated,
                    username: store.getState().user.username
                });
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
                        <label htmlFor="favcountry">{`Welcome ${this.state.username}, please select a country:`}</label>
                        {!this.isEmpty(this.state.countryList) ? <CountrySelection countryList={this.state.countryList}/> : <p>Loading...</p>}
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        this._isMounted = true;
        if (this.isEmpty(this.state.countryList) && this.state.isAuthenticated) {
            getCountries().then(response => this.setState({countryList: response}));
        }
    }

    isEmpty(list) {
        return list.length === 0;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
}

export default CountryList;
