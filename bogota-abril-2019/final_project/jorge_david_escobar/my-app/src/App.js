import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/navBar';
import WeatherCard from './components/WeatherCard';
import { async } from 'q';

const weather_api_key = "36e2fa16b70a4422ed609a5ad91f71f5";

class App extends React.Component {
  state ={
    city: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weather_api_key}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  

  render() {
    return (
      <div className="App">
        <NavBar getWeather={this.getWeather}></NavBar>
        <WeatherCard></WeatherCard>
      </div>
    );
  }
}

export default App;
