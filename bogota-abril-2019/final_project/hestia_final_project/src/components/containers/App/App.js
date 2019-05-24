import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';


class App extends React.Component {

  render(){
    return (
      <BrowserRouter> 
        <div className="main_container">
          <main>
            <Route exact path="/" render={() => <Login  />} />
            <Route path="/home" render={() => <Home  />} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
