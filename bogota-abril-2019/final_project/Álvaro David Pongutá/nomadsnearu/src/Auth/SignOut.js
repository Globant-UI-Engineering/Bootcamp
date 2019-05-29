import React from 'react';
import '../App.scss';
import firebase from '../Firebase';
import Button from '../Atoms/Button';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';

class SignOut extends React.Component {

    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        firebase.auth().signOut().then(function(){
            Alert.success('Se ha cerrado sesión correctamente', {
                position: 'top-left',
                effect: 'genie',
                timeout: 3000,
                offset: 5
            });
        }, function(error) {
            Alert.error(`Hubo un error cerrando sesión. (Error: ${error})`, {
                position: 'top-left',
                effect: 'genie',
                timeout: 3000,
                offset: 5
            });
        });
    }

    render () {
        return (
            <Button className={"App-button"} onClick={this.signOut} buttonInfo="Cerrar Sesión"></Button>
        );
    }
}

export default SignOut;