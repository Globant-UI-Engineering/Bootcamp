import React from 'react';
import '../App.scss';
import firebase from '../Firebase';
import Button from '../Atoms/Button';

class SignOut extends React.Component {

    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        firebase.auth().signOut().then(function(){
            alert("Se ha cerrado sesión correctamente");
        }, function(error) {
            alert("Hubo un error cerrando sesión");
        });
    }

    render () {
        return (
            <div>
                <Button className={"App-button"} onClick={this.signOut} buttonInfo="Cerrar Sesión"></Button>
            </div>
        );
    }
}

export default SignOut;