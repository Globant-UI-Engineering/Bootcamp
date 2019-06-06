import React from 'react';
import '../../App.scss';
import './CreateEvent.scss';
import firebase from '../../Firebase/Firebase';
import SearchBar from '../../Google/SearchBar';
import Select from 'react-select';
import Button from '../../Atoms/Button';
import Alert from 'react-s-alert';
import LoaderReact from '../../Loader/Loader';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';

let eventTypes = [
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
        this.showIfNotCorrectDateInput = this.showIfNotCorrectDateInput.bind(this);
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
        eventAddress: '',
        showLoader: false,
        correctDateInput: true, 
        eventCreated: false
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
        if([event.target.name] == 'eventImage'){
            this.setState({
                [event.target.name]: event.target.files[0]
            })
        } else if([event.target.name] == 'eventDate'){
            let inputDate = new Date(event.target.value);
            let nowDate = new Date(Date.now());
            if(inputDate.getTime() > nowDate.getTime()){
                this.setState({
                    [event.target.name]: event.target.value,
                    correctDateInput: true
                })
            } else {
                this.setState({
                    correctDateInput: false
                })
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
        
    }

    showIfNotCorrectDateInput(){
        if(!this.state.correctDateInput){
            return(
                <label>Por favor, seleccione una fecha mayor al día de hoy, con al menos dos días de diferencia</label>
            )
        }
    }

    writeEventInDatabase(e){

        this.setState({
            showLoader: true
        });

        e.preventDefault();

        let numberOfRemainingAsisstants = (this.state.checkBox) ? this.state.eventAssistants - 1 : this.state.eventAssistants;
        let userUID = firebase.auth().currentUser.uid;

        let checkedCheckBox = (this.state.checkBox) ? true : false;

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

                if(checkedCheckBox){
                    var eventXusersKey = firebase.database().ref("eventsXusers/").push().key;
                    var refEventsXusers = firebase.database().ref("eventsXusers/"+eventXusersKey);

                    refEventsXusers.set({
                        [userUID]: [eventKey]
                    });
                }

            });

            Alert.success('El evento se creó satisfactoriamente.', {
                position: 'top-left',
                effect: 'genie',
                timeout: 3000,
                offset: 5
            });
            
            this.setState({
                showLoader: false,
                eventCreated: true
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
            Alert.warning('Por favor ingrese una dirección.', {
                position: 'top-left',
                effect: 'genie',
                timeout: 3000,
                offset: 5
            });
        } else {
            Alert.warning('Por favor ingrese una dirección válida.', {
                position: 'top-left',
                effect: 'genie',
                timeout: 3000,
                offset: 5
            });
        }
    }

    showLoader(){
        if(this.state.showLoader){
            return (
               <LoaderReact></LoaderReact>
            )
        }
    }

    render () {
        return (
            <section>
                {
                    this.showLoader()
                }
                <article className="App-row-elements">
                    <h2>Crear Evento:</h2>
                </article>
                <article className="App-column-elements">
                    <form role="form" onSubmit={this.writeEventInDatabase}>
                        <div>
                            <label id="eventNameLabel">Escoja un nombre para su evento: </label>
                            <input aria-labelledby="eventNameLabel" role="textbox" type="text" name="eventName" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange} required></input>
                        </div>
                        <div className="App-create-searchbar-fix">
                            <label id="eventAddressLabel">Seleccione una dirección: </label> 
                            <div className="App-create-searchbar-fix">
                                <SearchBar aria-labelledby="eventAddressLabel" className={"App-create-searchbar"} onPlaceLoaded={this.onPlaceLoaded} aria-required="true" required/>
                            </div>
                        </div>
                        <div id="eventDateLabel">
                            <label>Seleccione una fecha: </label>
                            <input aria-labelledby="eventDateLabel" role="textbox" type="date" name="eventDate" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange} required/>
                        </div>
                        <div>
                            <label id="eventHourLabel">Seleccione una hora: (Ej. 16:00)</label>
                            <input aria-labelledby="eventHourLabel" role="textbox" type="time" name="eventHour" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange} required/>
                        </div>
                        <div className="App-create-searchbar-textarea">
                            <label id="eventDescriptionLabel">Añada una descripción: </label>
                            <textarea aria-labelledby="eventDescriptionLabel" role="textbox" type="text" name="eventDescription" className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange} required/>
                        </div>
                        <div>
                            <label id="eventAssistantsLabel">Escoja un número de asistentes: </label>
                            <input aria-labelledby="eventAssistantsLabel" type="number" name="eventAssistants" min={2} className={"App-create-searchbar"} aria-required="true" onChange={this.handleInputsChange} required/>
                            <label className="App-container-checkbox">¿Tu vas a asistir?
                                <input role="checkbox" type="checkbox" checked={this.state.checkBox} onChange={this.changeCheckBox}/>
                                <span className="App-checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label id="eventTypeLabel">Escoja el tipo de evento: </label>
                            <Select aria-labelledby="eventTypeLabel" role="listbox" className="App-select" options={ eventTypes } value={this.state.eventType} onChange={this.changeEventType} placeholder="Seleccione un tipo" aria-required="true" required/>
                        </div>
                        <div>
                            <label id="eventImageLabel">Seleccione una imagen: </label>
                            <input aria-labelledby="eventImageLabel" role="button" type="file" name="eventImage" className={"App-create-searchbar App-upload-image"} aria-required="true" onChange={this.handleInputsChange} required/>
                        </div>
                        <div className="App-element">
                            {
                                this.showIfNotCorrectDateInput()
                            }
                        </div>
                        <Button disabled={(!this.state.correctDateInput || this.state.eventCreated)} type="submit" className={"App-button App-button-create"} buttonInfo="Agregar Evento"></Button>
                    </form>
                </article>
            </section>
        );
    }
}

export default CreateEvent;