import { Route, Switch} from 'react-router-dom';
import index from './route/index.jsx';
import menuRoutes from "./route/menu.jsx";
import React from "react";


export const indexRoute = (
    index.map( (index, key) => (
        <Route path={index.path} exact={index.exact} component={index.component} key={key}/>
    ))
);

export const switchRouters = (
    <Switch>
        {
            menuRoutes.map( (props, key) => {
                return (
                    <Route path={props.path[0]} exact={props.exact} component={props.component} key={key}/>
                );
            })
        }
    </Switch>
);