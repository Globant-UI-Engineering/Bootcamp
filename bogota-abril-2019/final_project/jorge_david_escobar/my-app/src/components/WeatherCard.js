import React, { Component } from 'react';
import thermometer from '../components/resources/thermometer.svg';
import humidity from '../components/resources/humidity.svg';

export default class WeatherCard extends Component {
    render() {
        return (
            <div className="col-sm-12 col-lg-6 nonSpace">
                <div className="weatherCard">
                    <div className="card bg-light mb-3 mx-auto align-self-center">
                        <div className="card-header"><h2>{this.props.city}</h2></div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h5>{this.props.description}</h5></li>
                                <li className="list-group-item"><h5>Temp: {this.props.temperature} <img src={thermometer} height="42" width="42"></img></h5></li>
                                <li className="list-group-item"><h5>Humidity: {this.props.humidity} <img src={humidity} height="42" width="42"></img></h5></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
