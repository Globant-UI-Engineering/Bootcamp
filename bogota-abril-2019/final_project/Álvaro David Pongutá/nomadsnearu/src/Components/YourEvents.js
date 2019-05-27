import React from 'react';
import '../App.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'react-image-resizer';
import firebase from '../Firebase';
import { Link } from "react-router-dom";

class YourEvents extends React.Component {

    constructor(props){
        super(props);
        this.fillListCreatedEvents= this.fillListCreatedEvents.bind(this);
        this.fillListGoingToAssistEvents= this.fillListGoingToAssistEvents.bind(this);
        this.printCreatedEvents= this.printCreatedEvents.bind(this);
        this.printGoingEvents= this.printGoingEvents.bind(this);
    }

    state = {
        createdEvents: [],
        goingToAssistEvents: []
    }

    componentDidMount() {
        this.fillListCreatedEvents();
        this.fillListGoingToAssistEvents();
    }

    fillListCreatedEvents(){

        let currentUID = firebase.auth().currentUser.uid;
        let auxiliarEvent = {
            urlImage: '',
            eventName: '',
            eventID: ''
        }

        //Completar la lista de eventos creados por el usuario
        let auxiliarCreatedEvents = [];
        firebase.database().ref('/events').once('value', (eventsNode) => {
            eventsNode.forEach(event => {
                if(event.child("creatorUID").val() == currentUID){
                    auxiliarEvent = {
                        urlImage: event.child("urlImage").val(),
                        eventName: event.child("name").val(),
                        eventID: event.key
                    }
                    auxiliarCreatedEvents.push(auxiliarEvent);
                }
            });
            this.setState({
                createdEvents: auxiliarCreatedEvents
            });
        });
        
    }

    fillListGoingToAssistEvents(){

        let currentUID = firebase.auth().currentUser.uid;
        let auxiliarEvent = {
            urlImage: '',
            eventName: '',
            eventID: ''
        }

        //Completar la lista de eventos a los que asistirá el usuario
        let auxiliarGoingToAssistEvents = [];
        firebase.database().ref('/eventsXusers').once('value', (eventXusersNode) => {
            eventXusersNode.forEach(node => {
                if(node.child(currentUID).key == currentUID){
                    firebase.database().ref('/events').once('value', (eventsNode) => {
                        eventsNode.forEach(event => {
                            if(event.key == node.child(currentUID).child(0).val()){
                                auxiliarEvent = {
                                    urlImage: event.child("urlImage").val(),
                                    eventName: event.child("name").val(),
                                    eventID: node.child(currentUID).child(0).val() 
                                }
                                auxiliarGoingToAssistEvents.push(auxiliarEvent);
                            }
                        });
                        this.setState({
                            goingToAssistEvents: auxiliarGoingToAssistEvents
                        });
                    });
                }
            });
        });
        
    }

    printCreatedEvents(){
        if(this.state.createdEvents.length > 0){
            return this.state.createdEvents.map(createdEvent => (
                <div key={createdEvent.eventID} className="App-carousel">
                    <Image
                        src= {createdEvent.urlImage}
                        height={ 500 }
                        width={ 500 }
                    />   
                    <Link className="legend" to= {`/viewEvent/${createdEvent.eventID}`}>{createdEvent.eventName}</Link>
                </div>
            ))
        } else {
            return (
                <div className="App-carousel">
                    <label className="legend">No hay eventos disponibles</label>
                </div>
            )
        }
    }

    printGoingEvents(){
        if(this.state.goingToAssistEvents.length > 0 ){
            return this.state.goingToAssistEvents.map(assistingEvent => (
                <div key={assistingEvent.eventID} className="App-carousel">
                    <Image
                        src= {assistingEvent.urlImage}
                        height={ 500 }
                        width={ 500 }
                    />   
                    <Link className="legend" to= {`/viewEvent/${assistingEvent.eventID}`}>{assistingEvent.eventName}</Link>
                </div>
            ));
        } else {
            return (
                <div className="App-carousel">
                    <label className="legend">No hay eventos disponibles</label>
                </div>
            )
        }
    }

    render () {
        return (
            <section>
                <article className="App-row-elements">
                    <h2>Tus Eventos:</h2>
                </article>
                <article className="App-row-elements App-yourEvents-justify-center">
                    <div className="App-yourEvents yourEvents-left">
                        <article className="App-column-elements">
                            <h3>Eventos Creados</h3>
                            <Carousel className="App-carousel" showThumbs={false}>
                                {   
                                    this.printCreatedEvents()
                                }
                            </Carousel>
                        </article>
                    </div>
                    <div className="App-yourEvents yourEvents-right">
                        <article className="App-column-elements">
                            <h3>Eventos por asistir</h3>
                            <Carousel className="App-carousel" showThumbs={false}>
                                {   
                                    this.printGoingEvents()
                                }
                            </Carousel>
                        </article>
                    </div>
                </article>
            </section>
        );
    }
  }

  export default YourEvents;