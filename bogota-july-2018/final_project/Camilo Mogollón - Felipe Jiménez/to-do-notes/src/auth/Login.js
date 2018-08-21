import React from 'react';
import App from '../business/App';
import { auth } from '../firebase';
import { RegisterLink } from './Register';
import '../css/Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {usernameValue: '',
                  passwordValue: '',
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
    if (this.state.usernameValue!=='' && this.state.passwordValue!==''){
      auth.doSignInWithEmailAndPassword(this.state.usernameValue, this.state.passwordValue)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(exception => {
        this.setState({error: exception});
      });
      event.preventDefault();

    }else{
      alert('Please enter all fields');
      event.preventDefault();
    }
  }

  render () {
    return (
      <App>
        <section className="Login">
          <h2 className="App-title">Log In</h2>

          <form className="Login-form" onSubmit={this.handleSubmit}>
            <div className="Form-field">
              <label htmlFor="usernamevalue">Email :</label>
              <input type="text" name="usernameValue" placeholder="Email" value={this.state.usernameValue} onChange={this.handleInputChange} />
            </div>
            <div className="Form-field">
              <label htmlFor="passwordValue">Password :</label>
              <input type="password" name="passwordValue" placeholder="Password" value={this.state.passwordValue} onChange={this.handleInputChange} />
            </div>

            <button type="submit" value="Submit" className="Button-new" >Login</button>
            <div className="Alert">
              { this.state.error && <p>{this.state.error.message}</p> }
            </div>
          </form>
          <RegisterLink/>
        </section>
      </App>
    );
  }
}

const LoginLink = () =>
  <p>
    Already have an account?
    {' '}
    <a href="/login">Log In</a>
  </p>

export default Login;

export {
  LoginLink,
};
