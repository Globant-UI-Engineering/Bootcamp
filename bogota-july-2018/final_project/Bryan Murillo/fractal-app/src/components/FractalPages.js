import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/home.js';
import Koch from './containers/fractals/koch/koch.js';

const FractalPages = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/koch' component={Koch} />
    </Switch>
  </main>
)

export default FractalPages;
