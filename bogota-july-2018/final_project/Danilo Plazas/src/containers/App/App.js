import React, { Component } from 'react';
import './App.css';
import HeaderApp from '../../components/HeaderApp';
import FooterApp from '../../components/FooterApp';
import ContentApp from '../ContentApp/index';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';

class App extends Component {

    render() {
        const message = this.props.isCharged ? 'Charged Data': 'No Charged Data';
        const {isCharged, lastPeriod} = this.props;

        return (
            <div className="App">
                <HeaderApp message={message} charged={isCharged} addInf={"Info to: " + lastPeriod}/>
                <ContentApp charged={isCharged}/>
                <FooterApp/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isCharged: state.data.isCharged,
        lastPeriod: state.selectedData.selectedData.lastPeriod,
    }
}

App = withRouter(connect(mapStateToProps, null)(App));

export default App;
