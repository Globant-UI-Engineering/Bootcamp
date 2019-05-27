import React, { Component } from 'react'
import weather from '../components/resources/weather.png';
import { Link } from 'react-router-dom';



export default class navBar extends Component {

    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <img src={weather} width="45" height="45" alt="weather icon" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/news" className="nav-link">News</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" onSubmit={this.props.getWeather}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Type a city" aria-label="Search" name="city" />
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
