import React, { Component, createRef } from 'react';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import {compose} from 'redux'

class SignUp extends Component {

    state = {
        hasError:false,
        errorMsg:''
    }

    fnameInput = createRef();
    lnameInput = createRef();
    phoneInput = createRef();
    emailInput = createRef();
    pwdInput = createRef();

    
    //iniciar sesion en firebase
    createAccount = e =>{
        e.preventDefault();
        let email = this.emailInput.current.value;
        let password = this.pwdInput.current.value;
        let firstName = this.fnameInput.current.value;
        let lastName = this.lnameInput.current.value;
        let phoneNumber = this.phoneInput.current.value;
        let displayName= `${firstName.split(" ")[0]} ${lastName.split(" ")[0]}`
        const { firebase, firestore, history } = this.props;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( userRecord =>{
            if(userRecord){
                this.setState({
                    hasError:false,
                    errorMsg:''
                });
            let user = firebase.auth().currentUser;
               user.updateProfile({
                   displayName,
                   phoneNumber
               }).then(()=>{
                firestore.add({
                    collection: 'appUsers',
                }, {
                    id: user.uid,
                    email,
                    firstName,
                    lastName,
                    phoneNumber,
                    favorites:[]
                    })
                    .then(() => {
                        history.push('/');
                        console.log('Succesfully Inserted');
                    })
                    .catch(error => console.log(error));
               })
               .catch(error => console.log(error));
            }
        })
        .catch( error =>{
            this.setState({
            hasError:true,
            errorMsg: error.message
        })});
    }

    render() {
        const{hasError, errorMsg} = this.state;
        const validatorMsg = hasError ? <small role="alert">{errorMsg}</small> : null; 
        return (
            <div className="uk-container uk-container-small uk-margin">
                <div className="uk-card  uk-card-default uk-align-center uk-width-1-1@m uk-width-1-1@s">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" uk-grid>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom uk-text-center uk-text-uppercase">moviesapp</h3>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={this.createAccount}>
                        <div class="uk-card-body">
                            <div class="uk-margin">
                                <label>First Name:</label>
                                <input type="text" placeholder="Your first name" className="uk-input" name="first_name"  ref={this.fnameInput} required/>
                            </div>
                            <div class="uk-margin">
                                <label>Last Name:</label>
                                <input type="text" placeholder="Your last name" className="uk-input" name="email"  ref={this.lnameInput} required/>
                            </div>
                            <div class="uk-margin">
                                <label>Phone Number:</label>
                                <input type="number" min="0" placeholder="Your phone number" className="uk-input" name="number"  ref={this.phoneInput} required/>
                            </div>
                            <div class="uk-margin">
                                <label>Email:</label>
                                <input type="email" placeholder="Your email address" className="uk-input" name="email"  ref={this.emailInput} required/>
                            </div>
                            <div class="uk-margin">
                            <label>Password:</label>
                                <input type="password" placeholder="Your password" className="uk-input" name="password" ref={this.pwdInput} required/>
                            </div>

                        </div>
                        <div class="uk-card-footer">
                            <input 
                                type="submit"
                                className="uk-button uk-button-secondary  uk-align-center"
                                value="Create Account"/>
                            {validatorMsg}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

SignUp.propTypes = {
    firebase: PropTypes.object.isRequired,
    firestore:PropTypes.object.isRequired,
    history:PropTypes.object.isRequired
}

export default compose(firebaseConnect(), firestoreConnect()) (SignUp);