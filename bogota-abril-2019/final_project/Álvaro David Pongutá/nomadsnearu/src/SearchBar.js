import React from 'react';
import './App.scss';
import { GoogleApiWrapper } from 'google-maps-react';

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
            <input ref={this.autocompleteInput} className={this.props.className} placeholder="Ingrese la dirección"
                type="text"/>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("google_key")
})(SearchBar)