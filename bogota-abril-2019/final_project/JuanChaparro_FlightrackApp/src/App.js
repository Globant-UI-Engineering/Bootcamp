import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CountryList from './components/CountryList';
import CountryItem from './components/CountryItem';
import { HOME_PATH, LOGIN_PATH, AIRPORTS_PATH } from './constants/routes';

class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Route exact path={LOGIN_PATH} component={HomePage}/>
                    <Route exact path={HOME_PATH} component={CountryList}/>
                    <Route exact path={AIRPORTS_PATH} component={CountryItem}/>
                </Router>
            </div>
        );
    }
}

export default App;
