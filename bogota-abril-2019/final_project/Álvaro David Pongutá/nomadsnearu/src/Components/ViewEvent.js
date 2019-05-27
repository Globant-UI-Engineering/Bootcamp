import React from 'react';
import '../App.scss';
import firebase from '../Firebase';
import Button from '../Atoms/Button';
import Loader from 'react-loader-spinner';

class ViewEvent extends React.Component {

    constructor(props) {
        super(props);

        this.assistToAnEvent = this.assistToAnEvent.bind(this);
        this.showLoader = this.showLoader.bind(this);
        this.showNoAttendButton = this.showNoAttendButton.bind(this);
        this.showDeleteEventButton = this.showDeleteEventButton.bind(this);
        this.noAttendToEvent = this.noAttendToEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    state = {
        actualEvent: '',
        showLoader: true,
        userIsAssiting: false,
        userIsCreator: false
    };

    componentDidMount() {
        this.searchEventOnDataBase();
        this.userIsAssistingToEvent();
        this.userIsCreatorOfEvent();
    }

    searchEventOnDataBase() {
        firebase.database().ref('/events/' + this.props.match.params.eventId).once('value').then(event => this.setState({
            actualEvent: event.val(),
            showLoader: false
        }));
    }

    showLoader(){
        if(this.state.showLoader){
            return (
                <div className= "App-loader-container">
                    <div className= "App-loader">
                        <Loader 
                            type="Oval"
                            color="#282c34"
                            height="75"	
                            width="75"
                        />  
                    </div>
                </div>
            )
        }
    }

    assistToAnEvent() {

        if(firebase.auth().currentUser != null){
            let currentUID = firebase.auth().currentUser.uid;

            let actualEventId = this.props.match.params.eventId;

            //Mirar si en el evento hay cupos
            firebase.database().ref('/events/' + actualEventId).once('value').then(event => {
                if (event.val().numberOfRemainingAsisstants > 0){
                    //Revisar que la persona no esté asistiendo al evento
                    let assistingToEvent = false;
                    firebase.database().ref('/eventsXusers').once('value', (snapshot) => {
                        snapshot.forEach(snap => {
                            if(snap.child(currentUID).key === currentUID){
                                if(snap.child(currentUID).child(0).val() == actualEventId){
                                    assistingToEvent = true;
                                }
                            }
                        });
                        //Inscripción al evento del usuario
                        if(!assistingToEvent){
                            var eventXusersKey = firebase.database().ref("eventsXusers/").push().key;
                            var refEventsXusers = firebase.database().ref("eventsXusers/"+eventXusersKey);
                            refEventsXusers.set({
                                [currentUID]: [actualEventId]
                            });

                            //Se reducen los cupos disponibles del evento
                            firebase.database().ref("/events").child(actualEventId).child("numberOfRemainingAsisstants").set(event.val().numberOfRemainingAsisstants - 1);

                            this.setState({
                                actualEvent: {
                                    numberOfRemainingAsisstants: this.state.actualEvent.numberOfRemainingAsisstants - 1,
                                    name: this.state.actualEvent.name,
                                    description: this.state.actualEvent.description,
                                    type: this.state.actualEvent.type,
                                    numberOfTotalAssistants: this.state.actualEvent.numberOfTotalAssistants,
                                    date: this.state.actualEvent.date,
                                    address: this.state.actualEvent.address,
                                    urlImage: this.state.actualEvent.urlImage
                                },
                            });

                            alert("Se ha inscrito en el evento correctamente");
                        } else {
                            alert("Ya se encuentra inscrito para este evento");
                        }
                    });
                } else {
                    alert("En este momento no hay cupos disponibles para este evento");
                }
            })
        } else {
            alert("En este momento no te encuentras autenticado en el sistema, por favor realiza la autenticación");
        }
    }

    userIsAssistingToEvent(){
        if(firebase.auth().currentUser != null){
            let currentUID = firebase.auth().currentUser.uid;
            let actualEventId = this.props.match.params.eventId;

            //Buscar si este evento se encuentra en la lista de eventos por asistir del usuario autenticado
            firebase.database().ref('/eventsXusers').once('value', (snapshot) => {
                snapshot.forEach(snap => {
                    if(snap.child(currentUID).key == currentUID){
                        if(snap.child(currentUID).child(0).val() == actualEventId){
                            this.setState({
                                userIsAssiting: true
                            });
                        }
                    }
                });
            });

        }
    }

    showNoAttendButton(){
        if(this.state.userIsAssiting){
            return (
                <Button className={"App-button App-button-view"} onClick={this.noAttendToEvent} buttonInfo="Eliminar Inscripción a Evento"></Button>
            )
        }
    }

    userIsCreatorOfEvent(){
        if(firebase.auth().currentUser != null){
            let currentUID = firebase.auth().currentUser.uid;
            let actualEventId = this.props.match.params.eventId;

            //Buscar si este evento se encuentra en la lista de eventos por asistir del usuario autenticado
            firebase.database().ref('/events').once('value', (snapshot) => {
                snapshot.forEach(snap => {
                    if(snap.key == actualEventId){
                        if(snap.child("creatorUID").val() == currentUID){
                            this.setState({
                                userIsCreator: true
                            });
                        }
                    }
                });
            });

        }
    }

    showDeleteEventButton(){
        if(this.state.userIsCreator){
            return (
                <Button className={"App-button App-button-view"} onClick={this.deleteEvent} buttonInfo="Eliminar Evento"></Button>
            )
        }
    }

    noAttendToEvent(){

        if(firebase.auth().currentUser != null){

            let currentUID = firebase.auth().currentUser.uid;
            let actualEventId = this.props.match.params.eventId;
            let eventXuserKey = 0;

            firebase.database().ref('/eventsXusers').once('value', (snapshot) => {
                snapshot.forEach(snap => {
                    if(snap.child(currentUID).key == currentUID){
                        if(actualEventId == snap.child(currentUID).child(0).val()){
                            eventXuserKey = snap.key;
                        }
                    }
                });

                if(eventXuserKey !== 0){
                    //Se elimina la inscripción de la base de datos
                    firebase.database().ref('/eventsXusers').child(eventXuserKey).remove();

                    //Se aumentan los cupos disponibles del evento
                    firebase.database().ref("/events").child(actualEventId).child("numberOfRemainingAsisstants").set(this.state.actualEvent.numberOfRemainingAsisstants + 1);

                    this.setState({
                        actualEvent: {
                            numberOfRemainingAsisstants: this.state.actualEvent.numberOfRemainingAsisstants + 1,
                            name: this.state.actualEvent.name,
                            description: this.state.actualEvent.description,
                            type: this.state.actualEvent.type,
                            numberOfTotalAssistants: this.state.actualEvent.numberOfTotalAssistants,
                            date: this.state.actualEvent.date,
                            address: this.state.actualEvent.address,
                            urlImage: this.state.actualEvent.urlImage
                        },
                    });
                    alert("Has sido eliminado del evento correctamente");
                } else {
                    alert("Ya no te encuentras inscrito en el evento");
                }

            });
        }   
    }

    deleteEvent(){

        if(firebase.auth().currentUser != null){

            let actualEventId = this.props.match.params.eventId;
            let eventExist = false;

            firebase.database().ref('/events').once('value', (snapshot) => {
                snapshot.forEach(snap => {
                    if(actualEventId == snap.key){
                        eventExist = true;
                    }
                });

                if(eventExist){
                    //Se elimina el evento de la base de datos
                    firebase.database().ref("/events").child(actualEventId).remove();

                    //Se llena la lista de llaves de los nodos de asistencia a este evento
                    let assistingKeys = [];
                    firebase.database().ref('/eventsXusers').once('value', (snapshot) => {
                        snapshot.forEach(snap => {
                            snap.forEach(eventKey => {
                                if(actualEventId == eventKey.child(0).val()){
                                    assistingKeys.push(snap.key);
                                }
                            });
                        });

                        if(assistingKeys.length !== 0){
                            //Se eliminan la inscripciones de la base de datos
                            assistingKeys.forEach(key => {
                                firebase.database().ref('/eventsXusers').child(key).remove();
                            });
                        }
                    });
                    alert("El evento se ha eliminado correctamente");
                } else {
                    alert("El evento ya fue eliminado");
                }
            });
        }   

    }

    render () {  
        return (
            <section>
                {
                    this.showLoader()
                }
                <article className="App-row-elements">
                    <h2 className="home">{this.state.actualEvent.name}</h2>
                </article>
                <article className="App-row-elements">
                    <img className="image-left image-event" src={this.state.actualEvent.urlImage} alt="Event Image"/>
                    <article className="App-column-elements App-center-elements App-font-event">
                        <div className="center-text">
                            <h3>Fecha</h3>{this.state.actualEvent.date}
                        </div>
                        <div className="center-text">
                            <h3>Dirección</h3>{this.state.actualEvent.address}
                        </div>
                        <div className="center-text">
                            <h3>Descripción</h3>{this.state.actualEvent.description}
                        </div>
                        <div className="center-text">
                            <h3>Tipo</h3>{this.state.actualEvent.type}
                        </div>
                        <div className="center-text">
                            <h3>Número de asistentes</h3>{`${this.state.actualEvent.numberOfRemainingAsisstants}/${this.state.actualEvent.numberOfTotalAssistants}`}
                        </div>
                        <div className="center-text App-rowButtons-viewEvent">
                            <Button disabled={ this.state.actualEvent.numberOfRemainingAsisstants == 0 } className={"App-button App-button-view"} onClick={this.assistToAnEvent} buttonInfo="Asistir a Evento"></Button>
                            {this.showNoAttendButton()}
                            {this.showDeleteEventButton()}
                        </div>
                    </article>
                </article>
            </section>
        );
    }
}

export default ViewEvent;