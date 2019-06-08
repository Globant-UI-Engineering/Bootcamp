import React from 'react';
import './ViewEvent.scss';
import firebase from '../../Firebase/Firebase';
import Button from '../../Atoms/Button';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import LoaderReact from '../../Loader/Loader';

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
                <LoaderReact></LoaderReact>
            )
        }
    }

    assistToAnEvent() {

        if(firebase.auth().currentUser != null){
            let currentUID = firebase.auth().currentUser.uid;
            let actualEventId = this.props.match.params.eventId;
            let eventExist = false;

            //Mirar si el evento existe
            firebase.database().ref('/events').once('value').then(eventNodes => {
                eventNodes.forEach(event => {
                    if (event.key == actualEventId){
                        eventExist = true;
                    }
                })
                if(eventExist){
                    //Mirar si en el evento hay cupos
                    firebase.database().ref('/events/' + actualEventId).once('value').then(event => {
                        if (event.val().numberOfRemainingAsisstants > 0){
                            //Revisar que la persona no esté asistiendo al evento
                            let assistingToEvent = false;
                            firebase.database().ref('/eventsXusers').once('value', (eventXuserNode) => {
                                eventXuserNode.forEach(node => {
                                    if(node.child(currentUID).key === currentUID){
                                        if(node.child(currentUID).child(0).val() == actualEventId){
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
    
                                    Alert.success('Se ha inscrito en el evento correctamente', {
                                        position: 'top-left',
                                        effect: 'genie',
                                        timeout: 3000,
                                        offset: 5
                                    });

                                    this.forceUpdate();

                                } else {
                                    Alert.info('Ya se encuentra inscrito para este evento', {
                                        position: 'top-left',
                                        effect: 'genie',
                                        timeout: 3000,
                                        offset: 5
                                    });
                                }
                            });
                        } else {
                            Alert.info('En este momento no hay cupos disponibles para este evento', {
                                position: 'top-left',
                                effect: 'genie',
                                timeout: 3000,
                                offset: 5
                            });
                        }
                    })
                } else {
                    Alert.info('El evento ya no existe', {
                        position: 'top-left',
                        effect: 'genie',
                        timeout: 3000,
                        offset: 5
                    });
                }
            })

        } else {
            Alert.warning('En este momento no te encuentras autenticado en el sistema, por favor realiza la autenticación', {
                position: 'top-left',
                effect: 'genie',
                timeout: 3000,
                offset: 5
            });
        }
    }

    userIsAssistingToEvent(){
        if(firebase.auth().currentUser != null){
            let currentUID = firebase.auth().currentUser.uid;
            let actualEventId = this.props.match.params.eventId;

            //Buscar si este evento se encuentra en la lista de eventos por asistir del usuario autenticado
            firebase.database().ref('/eventsXusers').once('value', (eventXusersNode) => {
                eventXusersNode.forEach(node => {
                    if(node.child(currentUID).key == currentUID){
                        if(node.child(currentUID).child(0).val() == actualEventId){
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
            firebase.database().ref('/events').once('value', (eventsNode) => {
                eventsNode.forEach(event => {
                    if(event.key == actualEventId){
                        if(event.child("creatorUID").val() == currentUID){
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

            firebase.database().ref('/eventsXusers').once('value', (eventXuserNode) => {
                eventXuserNode.forEach(node => {
                    if(node.child(currentUID).key == currentUID){
                        if(actualEventId == node.child(currentUID).child(0).val()){
                            eventXuserKey = node.key;
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
                    
                    Alert.success('Has sido eliminado del evento correctamente', {
                        position: 'top-left',
                        effect: 'genie',
                        timeout: 3000,
                        offset: 5
                    });
                } else {
                    Alert.info('Ya no te encuentras inscrito en el evento', {
                        position: 'top-left',
                        effect: 'genie',
                        timeout: 3000,
                        offset: 5
                    });
                }

            });
        }   
    }

    deleteEvent(){

        if(firebase.auth().currentUser != null){

            let actualEventId = this.props.match.params.eventId;
            let eventExist = false;

            firebase.database().ref('/events').once('value', (eventsNode) => {
                eventsNode.forEach(event => {
                    if(actualEventId == event.key){
                        eventExist = true;
                    }
                });

                if(eventExist){
                    //Se elimina el evento de la base de datos
                    firebase.database().ref("/events").child(actualEventId).remove();

                    //Se llena la lista de llaves de los nodos de asistencia a este evento
                    let assistingKeys = [];
                    firebase.database().ref('/eventsXusers').once('value', (eventsXusersNode) => {
                        eventsXusersNode.forEach(node => {
                            node.forEach(eventKey => {
                                if(actualEventId == eventKey.child(0).val()){
                                    assistingKeys.push(node.key);
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
                    Alert.success('El evento ha sido eliminado correctamente', {
                        position: 'top-left',
                        effect: 'genie',
                        timeout: 3000,
                        offset: 5
                    });
                } else {
                    Alert.info('El evento ya fue eliminado', {
                        position: 'top-left',
                        effect: 'genie',
                        timeout: 3000,
                        offset: 5
                    });
                }
            });
        }   

    }

    changeDateFormat(eventDate){
        if(eventDate !== undefined){
            let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                                 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            let stringEventDate = eventDate.toString().split(" ");
            let yyyy_mm_dd = stringEventDate[0].split("-");
            
            let auxiliarDate = new Date(yyyy_mm_dd[0], yyyy_mm_dd[1], yyyy_mm_dd[2]);
            return `${monthNames[auxiliarDate.getMonth()-1]} ${yyyy_mm_dd[2]} del ${yyyy_mm_dd[0]} a las ${stringEventDate[1]}`;
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
                    <img role="img" className="image-left image-event" src={this.state.actualEvent.urlImage} alt="Event Image"/>
                    <article role="list" className="App-column-elements App-center-elements App-font-event">
                        <div className="center-text">
                            <h3>Fecha</h3>{this.changeDateFormat(this.state.actualEvent.date)}
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