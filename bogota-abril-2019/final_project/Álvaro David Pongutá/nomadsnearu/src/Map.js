import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import Home from './App';
import Button from './Atoms/Button';

/* global google */

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            {"types": ["geocode","establishment"]});

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }

    handlePlaceChanged(){
        const place = this.autocomplete.getPlace();
        this.props.onPlaceLoaded(place);
    }


    render() {
        return (
            <div className="App-column-elements">
                <input ref={this.autocompleteInput}  className="App-map-searchbar" placeholder="Ingrese la dirección"
                    type="text"/>
            </div>
        );
    }
}

export class MapContainer extends React.Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        center: {
            lat: 4.659361,
            lng: -74.108208
        },
        actualPosition: {
            lat: 4.659361,
            lng: -74.108208
        },
        zoom: 16
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

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            })
        }
    };

    onPlaceLoaded = (place) => {
        if(place.name !== "" && place.geometry !== undefined){
            let lat= place.geometry.location.lat();
            let lng= place.geometry.location.lng();
            this.setState({
                center: {
                    lat: lat,
                    lng: lng
                }
            })
        } else if(place.name === "") {
            alert("Por favor ingrese una dirección");
        } else {
            alert("Por favor ingrese una dirección válida");
        }
    }

    render() {
        return (
        <div className="App-map-searchbar-container">
            <div className="App-searchbar-container App-column-elements">
                <SearchBar className="App-searchbar" onPlaceLoaded={this.onPlaceLoaded}/>
                <Button className={"App-button-map App-button"} onClick={this.showCurrentLocation} buttonInfo="Localización Actual"></Button>
            </div>
            <div className="App-map-container">
                <Map className="App-map" google={this.props.google} zoom={this.state.zoom} initialCenter={this.state.center} center={this.state.center}>

                    <Marker
                            title={'Tu posición actual'}
                            position={ this.state.actualPosition }/>
                    
                    <Marker onClick={this.onMarkerClick}
                            title={'Curso de aprendizaje sobre la libreria React.'}
                            name={'Bootcamp REACT'}
                            position={{lat: 4.659361, lng: -74.108209}} />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                            <div>
                                <BrowserRouter>
                                    <Link to= {`/viewEvent`}>{this.state.selectedPlace.name}</Link>
                                    <Route path='/viewEvent' render={(props) => <Home {...props}/>}/>
                                </BrowserRouter>
                            </div>
                    </InfoWindow>
                </Map>
            </div>
        </div>   
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBdw9I1llo_EUaw_8Wdmsbo_8NvJ2ch98k")
})(MapContainer)