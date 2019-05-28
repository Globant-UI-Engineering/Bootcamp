import React from 'react';
import '../App.scss';
import { BrowserRouter, Link } from "react-router-dom";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import Button from '../Atoms/Button';
import SearchBar from './SearchBar';
import firebase from '../Firebase';

/* global google */

const center = {
    lat: 4.659361,
    lng: -74.108208
};

const zoom = 16;

export class MapContainer extends React.Component {

    constructor(props){
        super(props);
        this.markerShowCurrentLocation = this.markerShowCurrentLocation.bind(this);
        this.markerOnPlaceLoaded = this.markerOnPlaceLoaded.bind(this);
    }

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        center: {
            lat: 0,
            lng: 0
        },
        actualPosition: {
            lat: '',
            lng: ''
        }, 
        markersList: [],
        searchLocation: {
            lat: '',
            lng: '',
            name: ''
        }
    };

    showCurrentLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              this.setState(({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                actualPosition: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
              }))
            }
          )
        }
    }

    markerShowCurrentLocation(){
        if(this.state.actualPosition.lat !== ''){
            return (
                <Marker
                    title={'Tu posición actual'}
                    position={ this.state.actualPosition }/>
            )
        }
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      selectedId: marker.id,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapDragged = () => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
    };

    onMapReady = () => {
        let auxiliarMarkersList = this.state.markersList;
        firebase.database().ref('/events').on('value', snapshot => {
            snapshot.forEach(snap => {
                let marker = {
                    onClick: this.onMarkerClick,
                    title: snap.child("description").val(),
                    name: snap.child("name").val(),
                    position: {lat: snap.child("location").val().lat, lng: snap.child("location").val().lng},
                    id: snap.key
                }
                auxiliarMarkersList.push(marker);
            });
            this.setState({
                markersList: auxiliarMarkersList
            });
        });
    };

    onPlaceLoaded = (place) => {
        if(place.name !== "" && place.geometry !== undefined){
            let lat= place.geometry.location.lat();
            let lng= place.geometry.location.lng();
            this.setState({
                center: {
                    lat: lat,
                    lng: lng
                },
                searchLocation: {
                    lat: lat,
                    lng: lng,
                    name: place.name
                }
            })
        } else if(place.name === "") {
            alert("Por favor ingrese una dirección");
        } else {
            alert("Por favor ingrese una dirección válida");
        }
    }

    markerOnPlaceLoaded(){
        if(this.state.searchLocation.lat !== ''){
            return (
                <Marker
                    title={ this.state.searchLocation.name }
                    position={ this.state.searchLocation }/>
            )
        }
    }

    render() {
        return (
        <section className="App-map-searchbar-container">
            <article className="App-searchbar-container App-column-elements">
                <SearchBar className={"App-map-searchbar"} onPlaceLoaded={this.onPlaceLoaded}/>
                <Button className={"App-button-map App-button"} onClick={this.showCurrentLocation} buttonInfo="Localización Actual"></Button>
            </article>
            <article className="App-map-container">
                <Map role="application" className="App-map" google={this.props.google} onDragstart={this.onMapDragged} onReady={this.onMapReady} zoom={zoom} initialCenter={center} center={this.state.center}>

                    {
                        this.markerShowCurrentLocation()
                    }

                    {
                        this.markerOnPlaceLoaded()
                    }
                    
                    {   
                        this.state.markersList.map(marker => (
                            <Marker key= {marker.id}
                                onClick={marker.onClick}
                                title={marker.title}
                                name={marker.name}
                                position={{lat: marker.position.lat, lng: marker.position.lng}}
                                id={marker.id}
                            />
                        ))
                    }

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                            <div>
                                <BrowserRouter>
                                    <Link to= {`/viewEvent/${this.state.selectedId}`}>{this.state.selectedPlace.name}</Link>
                                </BrowserRouter>
                            </div>
                    </InfoWindow>
                </Map>
            </article>
        </section>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("google_key")
})(MapContainer)