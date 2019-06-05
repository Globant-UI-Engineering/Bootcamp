import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SurferCreate from './surfers/SurferCreate';
import SurferEdit from './surfers/SurferEdit';
import SurferDelete from './surfers/SurferDelete';
import SurferList from './surfers/SurferList';
import SurferShow from './surfers/SurferShow';
import InspirationApp from './search/InspirationApp';
import Header from './Header';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Route path="/search" exact component={InspirationApp}></Route>
          <Route path="/surfers/new" exact component={SurferCreate}></Route>
          <Route path="/surfers/edit" exact component={SurferEdit}></Route>
          <Route path="/surfers/delete" exact component={SurferDelete}></Route>
          <Route path="/surfers/show" exact component={SurferShow}></Route>
        </div>
      </BrowserRouter>


    </div>
  )
};

export default App;