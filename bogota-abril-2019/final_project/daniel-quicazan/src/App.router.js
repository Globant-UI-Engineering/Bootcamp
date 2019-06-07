import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
import {MainComponent} from "./views/main";
import {ComparativeComponent} from "./views/comparative";

export class AppRouter extends Component {
  previousLocation = this.props.location;
  
  render() {
    return(
      <div>
        <Switch>
          <Route path={'/'} exact component={MainComponent}/>
          <Route path={'/comparative'} exact component={ComparativeComponent}/>
        </Switch>
      </div>
    )
  }
}
