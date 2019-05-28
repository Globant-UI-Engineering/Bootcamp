import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";
import firebase from './Firebase';
import SignIn from './Auth/SignIn';
import SignOut from './Auth/SignOut';
import ViewEvent from './Components/ViewEvent';
import CreateEvent from './Components/CreateEvent';
import Home from './Components/Home';
import EventsMap from './Components/EventsMap';
import YourEvents from './Components/YourEvents';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, bindActionCreators } from 'redux';

//Redux
const CHANGE_TAB = 'change_tab';

//Action
let changeTab = function(actualTab) { 
    return {
      type: CHANGE_TAB,
      payload: actualTab
    }
}

//Reducer
let tabReducer = function(state={}, action) {
    switch(action.type) {
      case CHANGE_TAB:

            let booleanTabs = {
                home: false,
                eventsMap: false,
                yourEvents: false,
                createEvent: false
            }
        
            switch (action.payload) {
                case 'Home':
                    booleanTabs.home = true;
                  break;
                case 'EventsMap':
                    booleanTabs.eventsMap = true;
                  break;
                case 'YourEvents':
                    booleanTabs.yourEvents = true;
                  break;
                case 'CreateEvent':
                    booleanTabs.createEvent = true;
                  break;
            }
            return booleanTabs;
      default:
        return state;
    }
}

//This is the final reducer that gets attached to our store.
const rootReducer = combineReducers ({
    booleanTabs: tabReducer
});
  
//create the store
let store = createStore(rootReducer);

//map our the state's tab to this property on the components
let mapStateToProps = function(state) {
    return { booleanTabs: state.booleanTabs };
}

//give these components access to the change tab creator
let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({changeTab}, dispatch)
}

class ReduxNavigation extends React.Component {

    render() {

        let booleanTabs = {
            home: true,
            eventsMap: false,
            yourEvents: false,
            createEvent: false
        }

        if(Object.keys(this.props.booleanTabs).length === 0 && this.props.booleanTabs.constructor === Object){
            booleanTabs.home = true;
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

//Make the two components Redux Containers
const ReduxNavigationContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation);

//Components

class Header extends React.Component {

    constructor(props){
        super(props);
        this.showSignIn_signOut = this.showSignIn_signOut.bind(this);
    }

    state = {
        signIn: false
    }

    showSignIn_signOut(){
        this.setState({
            signIn: !this.state.signIn
        })
        this.forceUpdate();
    }

    render () {
        if(this.state.signIn){
            return (
                <header className = "App-header" role="presentation">
                    <h1>NomadsNearU</h1>
                    <img src = { logo } className = "App-logo" alt = "logo"></img>
                    <div onClick={() => this.showSignIn_signOut()}><SignOut/></div>
                </header>
            );
        } else {
            return (
                <header className = "App-header" role="presentation">
                    <h1>NomadsNearU</h1>
                    <img src = { logo } className = "App-logo" alt = "logo"></img>
                    <div onClick={() => this.showSignIn_signOut()}><SignIn/></div>
                </header>
            );
        }
    }
}

class Footer extends React.Component {
    render () {
        return (
            <div className = "App">
                <footer className = "App-footer" role="presentation">
                    Made by: Alvaro Ponguta. Globant - Bootcamp
                </footer>
            </div>
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

class NomadsNearU extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Header/>
                <ReduxNavigationContainer/>
                <Footer/>
            </Provider>
        );
    }
}

export default NomadsNearU;