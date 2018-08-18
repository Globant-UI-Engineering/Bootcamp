import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './presentational/home/home';
import Koch from './containers/fractals/koch/koch';

const RoutePages = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/koch' component={Koch} />
    </Switch>
  </main>
)

export default RoutePages;
