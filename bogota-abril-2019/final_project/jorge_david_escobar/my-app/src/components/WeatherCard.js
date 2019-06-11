import React, { Component } from 'react';
import thermometer from '../components/resources/thermometer.svg';
import humidity from '../components/resources/humidity.svg';
import { Link } from 'react-router-dom';
export default class WeatherCard extends Component {
    render() {
        return (
            <div className="col-sm-12 col-lg-6 nonSpace">
                <section>
                    <div className="weatherCard">
                        <article>
                            <div className="card bg-light mb-3 mx-auto align-self-center">
                                <div className="card-header" aria-label={"weather for "+this.props.city}><h2>{this.props.city} {this.props.country}</h2></div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" aria-label={this.props.description}><h5>{this.props.description}</h5></li>
                                        <li className="list-group-item" aria-label={"temperature is "+this.props.temperature}><h5>Temp: {this.props.temperature} <img src={thermometer} alt="thermometer" height="42" width="42"></img></h5></li>
                                        <li className="list-group-item" aria-label={"humidity if "+this.props.humidity+" percent"}><h5>Humidity: {this.props.humidity} <img src={humidity} alt="humidity" height="42" width="42"></img></h5></li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                        <Link to="/weather_deatils" className="btn btn-primary" aria-label="see full weather details">See full details</Link>
                    </div>
                </section>
            </div>
        );
    }
}
