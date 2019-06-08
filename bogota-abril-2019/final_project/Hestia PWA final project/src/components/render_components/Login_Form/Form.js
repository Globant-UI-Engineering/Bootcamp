import {Form, Button} from 'react-bootstrap';
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from '../../../config/firebase_config'

class FormComponent extends React.Component{

    constructor(props){
      super(props);

      this.state = {
        user: '',
        password: ''
      }
      this.handleUserChange = this.handleUserChange.bind(this); 
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.signIn = this.signIn.bind(this); 
    }

    handleUserChange(event){
      this.setState({
        user: event.target.value
     });
    }

    handlePasswordChange(event){
      this.setState({
        password: event.target.value
     });
    }

    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>User</Form.Label>
                  <Form.Control title="User" onChange={this.handleUserChange} type="email" placeholder="Enter email" />
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control title="Password" onChange={this.handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Link to= {`/home`}>
                  <Button title="Log In" variant="warning" onClick={this.signIn} className="button_login">
                    Log in
                  </Button>
                </Link>
            </Form>
        ) 
    }

    signIn(){
      const { history } = this.props;
      var email = this.state.user;
      var password = this.state.password;
      
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=> {
          history.push('/home');
        })
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage)
          history.push('/');
        })
        
    }
    
}

export default withRouter(FormComponent);