import React from 'react';
import App from '../business/App';
import { auth , db } from '../firebase';
import { LoginLink } from './Login';
import '../css/Register.css';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {nameValue: '',
                  usernameValue: '',
                  passwordValue: '',
                  passwordConfirmValue: '',
                  error: null,
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
      const {value, name} = event.target;
      this.setState({
        [name]: value
      });
  }

  handleSubmit(event) {
    if (this.state.usernameValue!=='' && this.state.passwordValue!=='' && this.state.nameValue!=='' && this.state.passwordConfirmValue!=='' && this.state.passwordConfirmValue === this.state.passwordValue){
      auth.doCreateUserWithEmailAndPassword(this.state.usernameValue, this.state.passwordValue)
      .then(authUser => {
        db.createUser(authUser.uid, this.state.nameValue)
        .then(() => {
          this.props.history.push('/');
        })
        .catch(exception => {
          this.setState({error: exception});
        });
      })
      .catch(exception => {
        this.setState({error: exception});
      });
      event.preventDefault();

    }else{
      alert('Please enter valid values on all fields');
      event.preventDefault();
    }
  }

  render () {
    return (
      <App>
        <section className="Register">
          <h2 className="App-title">Register</h2>

          <form className="Register-form" onSubmit={this.handleSubmit}>
            <div className="Form-field">
              <label htmlFor="nameValue">Name :</label>
              <input type="text" name="nameValue" value={this.state.nameValue} onChange={this.handleInputChange} />
            </div>
            <div className="Form-field">
              <label htmlFor="usernamedValue">Email :</label>
              <input type="text" name="usernameValue" value={this.state.usernameValue} onChange={this.handleInputChange} />
            </div>
            <div className="Form-field">
              <label htmlFor="passwordValue">Password :</label>
              <input type="password" name="passwordValue" value={this.state.passwordValue} onChange={this.handleInputChange} />
            </div>
            <div className="Form-field">
              <label htmlFor="passwordConfirmValue">Confirm Password :</label>
              <input type="password" name="passwordConfirmValue" value={this.state.passwordConfirmValue} onChange={this.handleInputChange} />
            </div>
            <button type="submit" value="Submit" className="Button-new">Register</button>
            <div className="Alert">
              { this.state.error && <p>{this.state.error.message}</p> }
            </div>
          </form>
          <LoginLink/>
        </section>
      </App>
    );
  }

}

const RegisterLink = () =>
  <p>
    Dont have an account?
    {' '}
    <a href="/register">Register</a>
  </p>

export default Register;

export {
  RegisterLink,
};
