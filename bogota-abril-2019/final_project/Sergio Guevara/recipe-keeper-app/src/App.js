import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/stateless components/Navbar/Navbar";
import Dashboard from './components/stateless components/Dashboard/Dashboard';
import RecipeDetails from './components/stateless components/RecipeDetails/RecipeDetails';
import CreateRecipe from './components/CreateRecipe';
import UpdateRecipe from './components/UpdateRecipeSection';
import NoPageMatch from "./components/stateless components/404error/404error";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/recipe/:id" component={RecipeDetails}/>
            <Route path="/create" component={CreateRecipe}/>
            <Route path="/update/:id" component={UpdateRecipe}/>
            <Route component={NoPageMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
