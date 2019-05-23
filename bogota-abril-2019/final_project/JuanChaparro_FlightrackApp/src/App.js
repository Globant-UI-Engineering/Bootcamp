import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CountryList from './components/CountryList';
import CountryItem from './components/CountryItem';
import Flightrack from './components/Flightrack';
import { HOME_PATH, LOGIN_PATH, AIRPORTS_PATH, TRACKER } from './constants/routes';

class App extends Component {
    render() {
        return(
            <Router>
                <Route exact path={LOGIN_PATH} component={HomePage}/>
                <Route exact path={HOME_PATH} component={CountryList}/>
                <Route exact path={AIRPORTS_PATH} component={CountryItem}/>
                <Route exact path={TRACKER} component={Flightrack}/>
            </Router>
        );
    }
}

export default App;
