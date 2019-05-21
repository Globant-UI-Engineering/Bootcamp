import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class CountrySelection extends Component {
    constructor({countryList}) {
        super();

        this.state = {
            countryList, 
            countrySelected: null,
            submitted: false
        }
    }

    render() {
        return(
            <div>
                <select id="favcountry" onChange={(event) => this.onChangeHandler(event)}>
                    {this.state.countryList.map((country) => 
                        <option key={country.countryId} value={country.codeIso2Country}>{country.nameCountry}</option>)}
                </select>
                <button type="submit" aria-label="submit" onClick={() => this.submitHandler()}>Submit</button>
                {this.state.submitted ? <Redirect to={`/countries/${this.state.countrySelected}`}/> : null}
            </div>
        );
    }

    onChangeHandler(event) {
        this.setState({countrySelected: event.target.value});
    }

    submitHandler() {
        if (!this.state.countrySelected) {
            this.setState({countrySelected: this.state.countryList[0].codeIso2Country});
        }
        this.setState({submitted: true});
    }
}

CountrySelection.propTypes = {
    countryList: PropTypes.array.isRequired
}

export default CountrySelection;
