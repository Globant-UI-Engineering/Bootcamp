import React from 'react';
import ViewEvent from '../Components/ViewEvent/ViewEvent';
import CreateEvent from '../Components/CreateEvent/CreateEvent';
import Home from '../Components/Home';
import EventsMap from '../Components/EventsMap';
import YourEvents from '../Components/YourEvents/YourEvents';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import firebase from '../Firebase/Firebase';
import tabReducer from './Reducers';
import changeTab from './Actions';
import './ReduxNavigationContainer.scss';

const rootReducer = combineReducers ({
    booleanTabs: tabReducer
});
  
let store = createStore(rootReducer);

let mapStateToProps = function(state) {
    return { booleanTabs: state.booleanTabs };
}

let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({changeTab}, dispatch)
}

class ReduxNavigation extends React.Component {

    constructor(props){
        super(props);
        this.checkPathName = this.checkPathName.bind(this);
    }

    checkPathName(pathname, booleanTabs){
        switch (pathname) {
            case '/':
                booleanTabs.home = true;
              break;
            case '/eventsMap':
                booleanTabs.eventsMap = true;
              break;
            case '/yourEvents':
                booleanTabs.yourEvents = true;
              break;
            case '/createEvent':
                booleanTabs.createEvent = true;
              break;
        }

        return booleanTabs;
    }

    render() {

        let booleanTabs = {
            home: false,
            eventsMap: false,
            yourEvents: false,
            createEvent: false
        }

         if(Object.keys(this.props.booleanTabs).length === 0 && this.props.booleanTabs.constructor === Object){
            booleanTabs = this.checkPathName(window.location.pathname, booleanTabs);
        } else if (window.location.pathname.indexOf('/viewEvent') == 0){
            booleanTabs = {
                home: false,
                eventsMap: false,
                yourEvents: false,
                createEvent: false
            }
        } else {
            booleanTabs = this.props.booleanTabs;
        } 

        return(
                <BrowserRouter>
                    <section className="App-container" role="main">
                        <article className="App-container_firstRow">
                            <nav role="navigation">
                                <div onClick={() => this.props.changeTab('Home')}>
                                    <Link role="tab" className={`App-link ${(booleanTabs.home) ? 'App-active-link' : ''}`} to= {`/`}>Home<i className="material-icons md-16">home</i></Link>
                                </div>
                                <div onClick={() => this.props.changeTab('EventsMap')}>
                                    <Link role="tab" className={`App-link ${(booleanTabs.eventsMap) ? 'App-active-link' : ''}`} to= {`/eventsMap`}>Mapa de eventos<i className="material-icons md-16">map</i></Link>
                                </div>
                                <div onClick={() => this.props.changeTab('YourEvents')}>
                                    <Link role="tab" className={`App-link ${(booleanTabs.yourEvents) ? 'App-active-link' : ''}`} to= {`/yourEvents`}>Tus Eventos<i className="material-icons md-16">face</i></Link>
                                </div>
                                <div onClick={() => this.props.changeTab('CreateEvent')}>
                                    <Link role="tab" className={`App-link ${(booleanTabs.createEvent) ? 'App-active-link' : ''}`} to= {`/createEvent`}>Crear Evento<i className="material-icons md-16">create</i></Link>
                                </div>
                            </nav>
                        </article>
                        <Route exact path='/' render={(props) => <Home {...props}/>}/>
                        <Route path='/eventsMap' render={(props) => <EventsMap {...props}/>}/>
                        <PrivateRoute path='/yourEvents' render={(props) => <YourEvents {...props}/>}/>
                        <PrivateRoute path='/createEvent' render={(props) => <CreateEvent {...props}/>}/>
                        <Route path= {`/viewEvent/:eventId`} render={(props) => <ViewEvent {...props}/>}/>
                    </section>
                </BrowserRouter>
        );
    }
}

class PrivateRoute extends React.Component {

    render () {
        if(firebase.auth().currentUser != null){
            return (
                <Route path={this.props.path} render={this.props.render}/>
            );
        } else {
            return (
                <Route path={this.props.path} render={(props) => <PleaseSignIn {...props}/>}/>
            );
        }
    }
}

class PleaseSignIn extends React.Component {
    render () {
        return (
            <section role="alert">
              <article className="App-row-elements">
                <h2 className="signin">¡Inicia sesión!</h2>
                <p>Para hacer uso de esta funcionalidad tienes que haberte autenticado.</p>
              </article>
          </section>
        );
    }
}

const ReduxNavigationIntegration = connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation);

class ReduxNavigationContainer extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <ReduxNavigationIntegration/>
            </Provider>
        );
    }
}

export default ReduxNavigationContainer;