import React from 'react';
import { Link } from 'react-router-dom';
import appFirebase from '../../firebase/Firebase';

import Login from '../login/LogIn';
import { TextField, Button } from '@material-ui/core/';
import './SignUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { email, passwordOne } = this.state;
    appFirebase
      .auth()
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        this.setState({
          email: '',
          passwordOne: '',
          passwordTwo: '',
          error: null,
        });
        this.props.history.push('/home');
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { email, passwordOne, passwordTwo } = this.state;
    return (
      <div className="SignUp">
        <section className="SignUp__box">
          <h1 className="SignUp__title">Join to the best news!</h1>
          <form className="SignUp__form" onSubmit={this.onSubmit}>
            <TextField
              required
              className="SignUp__textinput"
              id="standard-email-input"
              label="Email"
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              autoComplete="current-emai;"
              margin="normal"
              error={false}
            />
            <TextField
              required
              id="standard-password-input"
              label="Password"
              name="passwordOne"
              value={passwordOne}
              className="SignUp__textinput"
              onChange={this.onChange}
              type="password"
              margin="normal"
            />
            <TextField
              required
              id="standard-repeat-password-input"
              label="Repeat Password"
              name="passwordTwo"
              value={passwordTwo}
              className="SignUp__textinput"
              onChange={this.onChange}
              type="password"
              margin="normal"
            />
            <Button
              type="submit"
              className="SignUp__button"
              variant="contained"
              color="primary"
              size="medium"
              fullWidth={true}
            >
              Sign Up
            </Button>
          </form>
        </section>
        <span className="SignUp__anchor">
          <Link to="/login" component={Login}>
            You have account? Please join us!
          </Link>
        </span>
      </div>
    );
  }
}

export default SignUp;
