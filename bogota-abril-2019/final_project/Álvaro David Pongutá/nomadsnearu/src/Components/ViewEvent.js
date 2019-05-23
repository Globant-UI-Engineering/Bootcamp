import React from 'react';
import '../App.scss';
import firebase from '../Firebase';
import Button from '../Atoms/Button';

class ListActivities extends React.Component {

    printActivities(){
        if(this.props.objectActivities !== undefined){
                return Object.values(this.props.objectActivities).map(activity => 
                    <li>{activity}</li>
            );
        }
    }

    render () {  
        return (
            <ol>
                {this.printActivities()}
            </ol>
        );
    }
}

class ViewEvent extends React.Component {

    constructor(props) {
        super(props);

        this.assistToAnEvent = this.assistToAnEvent.bind(this);
    }

    state = {
        actualEvent: ''
    };

    componentDidMount() {
        firebase.database().ref('/events/' + this.props.match.params.eventId).once('value').then(event => this.setState({
            actualEvent: event.val()
        }))
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

                            alert("Se ha inscrito en el evento correctamente");
                        } else {
                            alert("Ya se encuentra inscrito para este evento correctamente");
                        }
                    });
                }
            })
        } else {
            alert("En este momento no te encuentras autenticado en el sistema, por favor realiza la autenticación");
        }
    }

    render () {  
        return (
            <section>
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
                        <div className="center-text">
                            <Button className={"App-button App-button-view"} onClick={this.assistToAnEvent} buttonInfo="Asistir a Evento"></Button>
                        </div>
                    </article>
                </article>
            </section>
        );
    }
}

export default ViewEvent;