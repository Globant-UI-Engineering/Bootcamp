import React, { Component } from 'react'

export default class WeatherCard extends Component {
    render() {
        return (
            <div className="weatherCard">
                <div className="card bg-light mb-3 mx-auto">
                    <div className="card-header"><h3>{this.props.city}</h3></div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><h5>Description: {this.props.description}</h5></li>
                            <li className="list-group-item"><h5>Temperature: {this.props.temperature}</h5></li>
                            <li className="list-group-item"><h5>Humidity: {this.props.humidity}</h5></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
