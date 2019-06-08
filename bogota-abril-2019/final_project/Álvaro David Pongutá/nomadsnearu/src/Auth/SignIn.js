import React from 'react';
import '../App.scss';
import firebase from '../Firebase/Firebase';
import Button from '../Atoms/Button';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';

class SignIn extends React.Component {

    state = {
        stateSignIn: ''
    }

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

                Alert.success('Te autenticaste correctamente', {
                    position: 'top-left',
                    effect: 'genie',
                    timeout: 3000,
                    offset: 5
                });
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                Alert.error(`Hubo un problema con la autenticación, realizalo de nuevo más tarde. (${errorCode}: ${errorMessage})`, {
                    position: 'top-left',
                    effect: 'genie',
                    timeout: 3000,
                    offset: 5
                });
            });
        } else {
            Alert.info('Ya estás autenticado en el sistema', {
                position: 'top-left',
                effect: 'genie',
                timeout: 3000,
                offset: 5
            });
        }
    }

    render () {
        return (
            <Button className={"App-button"} onClick={this.signIn} buttonInfo="Autenticarse con Google"></Button>
        );
    }
}

export default SignIn;