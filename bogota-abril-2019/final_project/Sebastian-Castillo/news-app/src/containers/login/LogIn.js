import React from 'react';
import { Link } from 'react-router-dom';
import appFirebase from '../../firebase/Firebase';

import SingUp from '../signup/SignUp';
import { TextField, Button } from '@material-ui/core/';
import './Login.css';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    appFirebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          email: '',
          password: '',
          error: null,
        });
        this.props.history.push('/home');
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <section className="Login__box">
          <h1 className="Login__title">Join to the best news!</h1>
          <form className="Login__form" onSubmit={this.onSubmit}>
            <TextField
              required
              id="standard-email-input"
              className="Login__textinput"
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
              className="Login__textinput"
              label="Password"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              autoComplete="current-password"
              margin="normal"
              error={false}
            />
            <Button
              type="submit"
              className="Login__button"
              variant="contained"
              color="primary"
              size="medium"
              fullWidth={true}
            >
              Log in
            </Button>
          </form>
        </section>
        <span className="SignUp__anchor">
          <Link to="/signup" component={SingUp}>
            You haven't account? Please join us!
          </Link>
        </span>
      </div>
    );
  }
}

export default LogIn;
