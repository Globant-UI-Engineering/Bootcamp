import React from 'react';
import './App.css';
import {MainComponent} from "./views/main";

function App() {

  return (
    <div className="App container">
      <div className={'row justify-content-center full-height'}>
        <MainComponent/>
      </div>
    </div>
  );
}

export default App;
