import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CountryList from './components/CountryList';
import CountryItem from './components/CountryItem';

class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Route exact path="/login" component={HomePage}/>
                    <Route exact path="/" component={CountryList}/>
                    <Route exact path="/countries/:countryCode" component={CountryItem}/>
                </Router>
            </div>
        );
    }
}

export default App;
