import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";
import MapContainer from './Map';
import firebase from './Firebase';
import SignIn from './Auth/SignIn';
import SignOut from './Auth/SignOut';
import ViewEvent from './Components/ViewEvent';
import SearchBar from './SearchBar';
import Select from 'react-select';
import Button from './Atoms/Button';

//Components

const eventTypes = [
        { value: 'Turístico', label: 'Turístico' },
        { value: 'Gastronomía', label: 'Gastronomía' },
        { value: 'Aprendizaje', label: 'Aprendizaje' },
        { value: 'Musical', label: 'Musical' },
        { value: 'Deportivo', label: 'Deportivo' },
        { value: 'Obra teatral', label: 'Obra teatral' },
        { value: 'Informal', label: 'Informal' },
        { value: 'Cinematografía', label: 'Cinematografía' }
    ];

class Header extends React.Component {

    constructor(props){
        super(props);
        this.showSignIn_signOut = this.showSignIn_signOut.bind(this);
    }

    showSignIn_signOut(){
        this.forceUpdate();
    }

    render () {
        if(firebase.auth().currentUser != null){
            return (
                <header className = "App-header">
                    <h1>NomadsNearU</h1>
                    <img src = { logo } className = "App-logo" alt = "logo"></img>
                    <div onClick={() => this.showSignIn_signOut()}><SignOut/></div>
                </header>
            );
        } else {
            return (
                <header className = "App-header">
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
                <footer className = "App-footer">
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
            <section>
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
                <section className="App-container">
                    <article className="App-container_firstRow">
                        <nav>
                            <Link className="App-link" to= {`/`}>Home<i className="material-icons md-16">home</i></Link>
                            <Link className="App-link" to= {`/popularEvents`}>Eventos populares<i className="material-icons md-16">favorite</i></Link>
                            <Link className="App-link" to= {`/eventsMap`}>Mapa de eventos<i className="material-icons md-16">map</i></Link>
                            <div onClick={() => this.checkSignIn()}>
                                <Link className="App-private-link" to= {`/yourEvents`}>Tus Eventos<i className="material-icons md-16">face</i></Link>
                            </div>
                            <div onClick={() => this.checkSignIn()}>
                                <Link className="App-private-link" to= {`/createEvent`}>Crear Evento<i className="material-icons md-16">create</i></Link>
                            </div>
                        </nav>
                    </article>
                    <Route exact path='/' render={(props) => <Home {...props}/>}/>
                    <Route path='/popularEvents' render={(props) => <PopularEvents {...props}/>}/>
                    <Route path='/eventsMap' render={(props) => <EventsMap {...props}/>}/>
                    <PrivateRoute path='/yourEvents' render={(props) => <YourEvents {...props}/>}/>
                    <PrivateRoute path='/createEvent' render={(props) => <CreateEvent {...props}/>}/>
                    <Route path= {`/viewEvent/:eventId`} render={(props) => <ViewEvent {...props}/>}/>
                </section>
            </BrowserRouter>
        );
    }
}

class Home extends React.Component {

  render () {
      return (
          <section>
              <article>
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
                <div className="App-row-elements">
                    <h3>¡Únete a esta comunidad!</h3>
                </div>
              </article>
              <article className="App-column-elements">
                  <div className="center-tools">
                    <h2 className="subtitle-home">Herramientas Utilizadas</h2>
                    <div className="App-row-elements">
                        <img className="images-services" src="https://cdn-images-1.medium.com/max/1200/0*CPTNvq87xG-sUGdx.png" alt="Firebase"/>
                        <img className="images-services" src="https://sg.com.mx/sites/default/files/styles/480x319/public/2018-09/react.png?itok=uDH8iO9y" alt="React"/>
                        <img className="images-services" src="https://d3dh6of9cnaq4t.cloudfront.net/Pictures/480xAny/1/9/2/7192_googlelogo3x2_689926.png" alt="Google API"/>
                    </div>
                  </div>
              </article>
          </section>
      );
  }
}

class PopularEvents extends React.Component {

  render () {
      return (
          <section>
              <article className="App-row-elements">
                  <h2>Eventos Populares:</h2>
              </article>
              <article className="App-column-elements">
                  
              </article>
          </section>
      );
  }
}

class EventsMap extends React.Component {

  render () {
      return (
          <section>
              <article className="App-row-elements">
                  <h2>Mapa de eventos:</h2>
              </article>
              <article className="App-column-elements">
                <MapContainer/>
              </article>
          </section>
      );
  }
}

class YourEvents extends React.Component {

  render () {
      return (
          <section>
              <article className="App-row-elements">
                  <h2>Tus Eventos:</h2>
              </article>
              <article className="App-column-elements">
                  
              </article>
          </section>
      );
  }
}

class CreateEvent extends React.Component {

    constructor(props){
        super(props);
        this.writeEventInDatabase = this.writeEventInDatabase.bind(this);
        this.changeCheckBox = this.changeCheckBox.bind(this);
        this.changeEventType = this.changeEventType.bind(this);
        this.handleInputsChange = this.handleInputsChange.bind(this);
    }

    state = {
        checkBox: false,
        eventType: '',
        position: {
            lat: '',
            lng: ''
        },
        eventName: '',
        eventDate: '',
        eventHour: '',
        eventDescription: '',
        eventAssistants: '',
        eventImage: '',
        eventAddress: ''
    }

    changeCheckBox(){
        this.setState({
            checkBox: !this.state.checkBox
        })
    }

    changeEventType(type){
        this.setState({
            eventType: type
        })
    }

    handleInputsChange(event){
        if([event.target.name] != 'eventImage'){
            this.setState({
                [event.target.name]: event.target.value
            })
        } else {
            this.setState({
                [event.target.name]: event.target.files[0]
            })
        }
        
    }

    writeEventInDatabase(){

        let numberOfRemainingAsisstants = (this.state.checkBox) ? this.state.eventAssistants - 1 : this.state.eventAssistants;
        let userUID = firebase.auth().currentUser.uid;

        let event = {
            name: this.state.eventName,
            location: {
                lat: this.state.position.lat,
                lng: this.state.position.lng
            },
            description: this.state.eventDescription,
            type: this.state.eventType.value,
            numberOfTotalAssistants: this.state.eventAssistants,
            date: this.state.eventDate + ' ' + this.state.eventHour,
            address: this.state.eventAddress
        }

        // Create a root reference
        var storageRef = firebase.storage().ref();
        var eventImageRef = storageRef.child(this.state.eventImage.name);

        const uploadEventImage = eventImageRef.put(this.state.eventImage);
        uploadEventImage.on('state_changed',
        (snapshot) => {

        },
        (error) => {

        },
        () =>{

            storageRef.child(this.state.eventImage.name).getDownloadURL().then(function(url) {
                var eventKey = firebase.database().ref("events/").push().key;
                var refEvents = firebase.database().ref("events/"+eventKey);

                var time = new Date().getTime();
                var eventDate = new Date(time);
                eventDate = eventDate.toString();

                refEvents.set({
                    name: event.name,
                    location: {
                        lat: event.location.lat,
                        lng: event.location.lng
                    },
                    description: event.description,
                    type: event.type,
                    numberOfTotalAssistants: event.numberOfTotalAssistants,
                    numberOfRemainingAsisstants: numberOfRemainingAsisstants,
                    date: event.date,
                    address: event.address,
                    creatorUID: userUID,
                    ulrImage: url
                });

                var eventXusersKey = firebase.database().ref("eventsXusers/").push().key;
                var refEventsXusers = firebase.database().ref("eventsXusers/"+eventXusersKey);

                refEventsXusers.set({
                    [userUID]: [eventXusersKey]
                });

                alert('El evento se creó satisfactoriamente.')

            });
        })
    }

    onPlaceLoaded = (place) => {
        if(place.name !== "" && place.geometry !== undefined){
            this.setState({
                position: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                },
                eventAddress: place.formatted_address
            })
        } else if(place.name === "") {
            alert("Por favor ingrese una dirección");
        } else {
            alert("Por favor ingrese una dirección válida");
        }
    }

    render () {
        return (
            <section>
                <article className="App-row-elements">
                    <h2>Crear Evento:</h2>
                </article>
                <article className="App-column-elements">
                    <div>
                        <label>Escoja un nombre para su evento: </label>
                        <input type="text" name="eventName" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange}/>
                    </div>
                        <label>Seleccione una dirección: </label> 
                        <SearchBar className={"App-create-searchbar"} onPlaceLoaded={this.onPlaceLoaded} aria-required="true"/>
                    <div>
                        <label>Seleccione una fecha: </label>
                        <input type="date" name="eventDate" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange}/>
                    </div>
                    <div>
                        <label>Seleccione una hora: </label>
                        <input type="time" name="eventHour" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange}/>
                    </div>
                    <div>
                        <label>Añada una descripción: </label>
                        <input type="text" name="eventDescription" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange}/>
                    </div>
                    <div>
                        <label>Escoja un número de asistentes: </label>
                        <input type="number" name="eventAssistants" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange}/>
                        <label className="App-container-checkbox">¿Tu vas a asistir?
                            <input type="checkbox" checked={this.state.checkBox} onClick={this.changeCheckBox}/>
                            <span className="App-checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label>Escoja el tipo de evento: </label>
                        <Select className="App-select" options={ eventTypes } value={this.state.eventType} onChange={this.changeEventType} placeholder="Seleccione un tipo" aria-required="true"/>
                    </div>
                    <div>
                        <label>Seleccione una imagen: </label>
                        <input type="file" name="eventImage" className={"App-create-searchbar App-upload-image"} aria-required="true" onChange={this.handleInputsChange}/>
                    </div>
                    <Button className={"App-button App-button-create"} onClick={this.writeEventInDatabase} buttonInfo="Agregar Evento"></Button>
                </article>
            </section>
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