import React from 'react';
import './App.css';
import {AppRouter} from "./App.router";
import {BrowserRouter, Route} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCertificate, faBolt, faShieldAlt, faHeart, faRunning, faSearch, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faCertificate, faBolt, faShieldAlt, faHeart, faRunning, faSearch, faArrowCircleLeft);

function App() {

  return (
    <div className="App container">
      <div className={'row justify-content-center full-height'}>
        <BrowserRouter>
          <Route component={AppRouter}/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
