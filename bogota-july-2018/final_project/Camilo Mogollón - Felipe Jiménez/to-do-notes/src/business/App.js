import React, { Component } from 'react';
import  { firebase }  from '../firebase';
import '../css/App.css';

class App extends Component {

  constructor(props) {
   super(props);

   this.state = {
     authUser: null,
   };
 }

 componentDidMount() {
    this.fireBaseListener = firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
     this.fireBaseListener();
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1>To Do Notes</h1>
        </header>
        {this.props.children}
      </React.Fragment>
    );
  }

}

export default App;
