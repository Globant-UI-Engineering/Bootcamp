import React from 'react';
import '../App.scss';
import firebase from '../Firebase';
import Button from '../Atoms/Button';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    alreadySignIn(){
        if(firebase.auth().currentUser === null)
            return false;
        return true;
    }

    signIn(){
        if(!this.alreadySignIn()){
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function(result) {
                // The signed-in user info.
                var user = result.user;
                
                firebase.database().ref('users/'+ user.uid).set({
                    email: user.email,
                    name: user.displayName
                });

                alert("Te has autenticado correctamente");
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                //alert(errorCode+": "+errorMessage);
                alert("Hubo un problema iniciando sesión, vuelva a intentarlo más tarde");
            });
        } else {
            alert("Ya iniciaste sesión");
        }
    }

    render () {
        return (
            <div>
                <Button className={"App-button"} onClick={this.signIn} buttonInfo="Autenticarse con Google"></Button>
            </div>
        );
    }
}

export default SignIn;