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

class Container extends React.Component {

    constructor(props){
        super(props);
        this.checkSignIn = this.checkSignIn.bind(this);
    }

    checkSignIn(){
        this.forceUpdate();
    }

    render () {
        return (
            <BrowserRouter>
                <section className="App-container" role="main">
                    <article className="App-container_firstRow">
                        <nav role="navigation">
                            <Link role="tab" className="App-link" to= {`/`}>Home<i className="material-icons md-16">home</i></Link>
                            <Link role="tab" className="App-link" to= {`/eventsMap`}>Mapa de eventos<i className="material-icons md-16">map</i></Link>
                            <div onClick={() => this.checkSignIn()}>
                                <Link role="tab" className="App-private-link" to= {`/yourEvents`}>Tus Eventos<i className="material-icons md-16">face</i></Link>
                            </div>
                            <div onClick={() => this.checkSignIn()}>
                                <Link role="tab" className="App-private-link" to= {`/createEvent`}>Crear Evento<i className="material-icons md-16">create</i></Link>
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

class NomadsNearU extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        );
    }
}

export default NomadsNearU;