import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Persona from './componentes/persona/Persona';
import MostrarPersona from './componentes/persona/MostrarPersona';
import EditarPersona from './componentes/persona/EditarPersona';
import NuevaPersona from './componentes/persona/NuevaPersona';

import BarraNavegacion from './componentes/layout/BarraNavegacion.js';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/Usuarios" component={Persona} />
          <Route exact path="/personas/nueva" component={NuevaPersona} />
          <Route exact path="/personas/mostrar/:id" component={MostrarPersona} />
          <Route exact path="/personas/editar/:id" component={EditarPersona} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
