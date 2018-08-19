import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './presentational/pages/pages';

const RoutePages = () => (
  <main>
    <Switch>
      <Route exact path='/:page?' component={Pages} />
    </Switch>
  </main>
)

export default RoutePages;
