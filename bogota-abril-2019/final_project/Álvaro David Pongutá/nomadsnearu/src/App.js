import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";
import MapContainer from './Map';
import firebase from './Firebase';
import SignIn from './Auth/SignIn';
import SignOut from './Auth/SignOut';

//Components
class Header extends React.Component {
    render () {
        return (
            <header className = "App-header">
                <h1>NomadsNearU</h1>
                <img src = { logo } className = "App-logo" alt = "logo"></img>
                <SignIn/>
                <SignOut/>
            </header>
        );
    }
}

class Footer extends React.Component {
    render () {
        return (
            <div className = "App">
                <footer className = "App-footer">
                    Made by: Alvaro Ponguta. Globant - Bootcamp
                </footer>
            </div>
        );
    }
}

class Container extends React.Component {

  render () {
        return (
            <BrowserRouter>
                <section className="App-container">
                    <article className="App-container_firstRow">
                        <nav>
                            <Link className="App-link" to= {`/home`}>Home<i className="material-icons md-16">home</i></Link>
                            <Link className="App-link" to= {`/popularEvents`}>Eventos populares<i className="material-icons md-16">favorite</i></Link>
                            <Link className="App-link" to= {`/eventsMap`}>Mapa de eventos<i className="material-icons md-16">map</i></Link>
                            <Link className="App-link" to= {`/yourEvents`}>Tus Eventos<i className="material-icons md-16">face</i></Link>
                            <Link className="App-link" to= {`/createEvent`}>Crear Evento<i className="material-icons md-16">create</i></Link>
                        </nav>
                    </article>
                    <Route path='/Home' render={(props) => <Home {...props}/>}/>
                    <Route path='/popularEvents' render={(props) => <PopularEvents {...props}/>}/>
                    <Route path='/eventsMap' render={(props) => <EventsMap {...props}/>}/>
                    <Route path='/yourEvents' render={(props) => <YourEvents {...props}/>}/>
                    <Route path='/createEvent' render={(props) => <CreateEvent {...props}/>}/>
                </section>
            </BrowserRouter>
        );
    }
}

class Home extends React.Component {

  render () {
      return (
          <article>
              <div>
                <div className="App-row-elements">
                    <h2 className="home">¿Quiénes somos?</h2>
                </div>
                <div className="App-row-elements center">
                    <img className="image-left" src="https://image.freepik.com/vector-gratis/personajes-personas-su-ilustracion-redes-sociales_53876-58967.jpg" alt=""/>
                    <p>Somos una empresa dedicada a ofrecer un servicio de ayuda para la participación a eventos grupales de todo tipo como ocio, académicos, informativos, 
                      turísticos, etc. Unimos redes de personas a través de intereses en común, enfrentamos
                      cualquier barrera y le permitimos a las personas vivir las experiencias que desean.
                    </p>
                </div>
                <div className="App-row-elements no-margin-left">
                    <h3>¡Únete a esta comunidad!</h3>
                </div>
              </div>
              <div className="App-row-elements no-margin-left">
                  <h2 className="subtitle-home home">Herramientas Utilizadas</h2>
                  <div className="App-row-elements center-subtitle no-margin-left">
                    <img className="images-services" src="https://cdn-images-1.medium.com/max/1200/0*CPTNvq87xG-sUGdx.png" alt=""/>
                    <img className="images-services" src="https://sg.com.mx/sites/default/files/styles/480x319/public/2018-09/react.png?itok=uDH8iO9y" alt=""/>
                  </div>
              </div>
          </article>
      );
  }
}

class PopularEvents extends React.Component {

  render () {
      return (
          <article>
              <div className="App-row-elements">
                  <h2>Eventos Populares:</h2>
              </div>
              <div className="App-column-elements">
                  
              </div>
          </article>
      );
  }
}

class EventsMap extends React.Component {

  render () {
      return (
          <article>
              <div className="App-row-elements">
                  <h2>Mapa de eventos:</h2>
              </div>
              <div className="App-column-elements">
                <MapContainer/>
              </div>
          </article>
      );
  }
}

class YourEvents extends React.Component {

  render () {
      return (
          <article>
              <div className="App-row-elements">
                  <h2>Tus Eventos:</h2>
              </div>
              <div className="App-column-elements">
                  
              </div>
          </article>
      );
  }
}

class CreateEvent extends React.Component {

    writeEventInDatabase(){

        var eventKey = firebase.database().ref("events/").push().key;
        var refEvents = firebase.database().ref("events/"+eventKey);

        refEvents.set({
            name: 'Bootcamp REACT',
            location: {
                lat: 4.659361,
                lng: -74.108209
            },
            description: 'Curso de aprendizaje sobre la libreria React.',
            type: 'Aprendizaje',
            ulrImage: 'gs://nomadsnearu.appspot.com/globant-offices-bogotá-aei-arquitectura-e-interiores-25-700x467.jpg',
            numberOfTotalAssistants: 40,
            numberOfRemainingAsissitants: 40,
            date: new Date(),
            address: 'Av. El Dorado # 69b-45, Bogotá',
            creatorUID: firebase.auth().currentUser.uid,
            activities: {
                activitie_1: 'Clases presenciales',
                activitie_2: 'Clases remotas',
                activitie_3: 'Proyecto'
            },
        });

        var refEventsXusers = firebase.database().ref("eventsXusers/"+eventKey);

        refEventsXusers.set({
            user_id_1: firebase.auth().currentUser.uid
        });
    }

    render () {
        return (
            <article>
                <div className="App-row-elements">
                    <h2>Crear Evento:</h2>
                </div>
                <div className="App-column-elements">
                    
                </div>
            </article>
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