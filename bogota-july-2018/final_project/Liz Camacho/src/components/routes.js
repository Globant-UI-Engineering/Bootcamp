import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/home';
import Details from "./containers/details";

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail/:id' component={Details} />
        </Switch>
    </main>
)

export default Routes
