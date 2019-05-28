import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import RecipeDetails from './components/recipes/RecipeDetails';
import CreateRecipe from './components/recipes/CreateRecipe';
import UpdateRecipe from './components/recipes/UpdateRecipeSection';

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
