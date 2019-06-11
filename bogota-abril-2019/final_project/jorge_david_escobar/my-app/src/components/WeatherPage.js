import React, { Component } from 'react';
import umbrella from './resources/umbrella.svg';
import thermometer from './resources/thermometer.svg';
import lowTemperature from './resources/lowTemperature.svg';
import highTemperature from './resources/highTemperature.svg';
import humidity from './resources/humidity.svg';
import pressure from './resources/pressure.svg';
import windSock from './resources/windsock.svg';
import binoculars from './resources/binoculars.svg';

class WeatherPage extends Component {

    render() {
        return (
            <div className="col-12 table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" colSpan={3}> <h1>{this.props.city}</h1> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={umbrella} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Description</th>
                            <td aria-label={this.props.description}>{this.props.description}</td>
                        </tr>
                        <tr>
                            <td><img src={thermometer} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Temperature</th>
                            <td aria-label={"temperature is "+this.props.temperature}>{this.props.temperature}</td>
                        </tr>
                        <tr>
                            <td><img src={lowTemperature} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Min Temp</th>
                            <td aria-label={"minimum temperature is "+this.props.min_temp}>{this.props.min_temp}</td>
                        </tr>
                        <tr>
                            <td><img src={highTemperature} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Max Temp</th>
                            <td aria-label={"maximum temperature is "+this.props.max_temp}>{this.props.max_temp}</td>
                        </tr>
                        <tr>
                            <td><img src={humidity} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Humidity</th>
                            <td aria-label={"humidity is "+this.props.humidity}>{this.props.humidity}</td>
                        </tr>
                        <tr>
                            <td><img src={pressure} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Pressure</th>
                            <td aria-label={"the pressure is "+this.props.pressure}>{this.props.pressure}</td>
                        </tr>
                        <tr>
                            <td><img src={binoculars} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Visibility</th>
                            <td aria-label={"visibility is "+this.props.visibility}>{this.props.visibility}</td>
                        </tr>
                        <tr>
                            <td><img src={windSock} width="45" height="45" alt="weather icon" /></td>
                            <th scope="row">Wind Speed</th>
                            <td aria-label={"the wind speed is "+this.props.wind_speed}>{this.props.wind_speed}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WeatherPage;