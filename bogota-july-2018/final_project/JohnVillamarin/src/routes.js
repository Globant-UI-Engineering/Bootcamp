import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./components/App";
import History from "./components/History";
import Games from "./components/Games";
import Shoes from "./components/Shoes";
import Home from "./components/Home";
import Page404 from "./components/Page404";

const AppRoutes = () =>    
        <App>
            <Switch>
                <Route exact path="/history" component={History}/>
                <Route exact path="/games" component={Games} />
                <Route exact path="/shoes" component={Shoes} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={Home} />                   
                <Route component={Page404} />
            </Switch>
        </App>
   
export default AppRoutes;   