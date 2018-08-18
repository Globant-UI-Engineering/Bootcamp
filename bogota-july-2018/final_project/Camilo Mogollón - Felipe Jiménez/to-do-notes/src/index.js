import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Home from './business/projects/Home';
import UserTaskBoard from './business/tasks/UserTaskBoard';
import Login from './auth/Login';
import Register from './auth/Register';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
    <Route exact path='/' component={Home}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    <Route path="/project/" component={UserTaskBoard} />
    </div>
  </BrowserRouter>
  ,document.getElementById('root'));

registerServiceWorker();
