import React from 'react';
import '../App.scss';
import firebase from '../Firebase';
import SearchBar from '../Google/SearchBar';
import Select from 'react-select';
import Button from '../Atoms/Button';

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
                    urlImage: url
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

export default CreateEvent;