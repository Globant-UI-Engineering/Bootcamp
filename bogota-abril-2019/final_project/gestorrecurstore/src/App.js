import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Persona from './componentes/persona/Persona';
import MostrarPersona from './componentes/persona/MostrarPersona';
import EditarPersona from './componentes/persona/EditarPersona';
import NuevaPersona from './componentes/persona/NuevaPersona';

import Herramienta from'./componentes/herramientas/Herramientas';
import EditarHerramienta from'./componentes/herramientas/EditarHerramienta';
import NuevaHerramienta from'./componentes/herramientas/NuevaHerramienta';
import MostrarHerramienta from'./componentes/herramientas/MostrarHerramienta';
import PestamoHerramienta from'./componentes/herramientas/PrestamoHerramienta';

import BarraNavegacion from './componentes/layout/BarraNavegacion.js';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/" component={Herramienta} />
          <Route exact path="/herramientas/mostrar/:id" component={MostrarHerramienta} />
          <Route exact path="/herramientas/nueva" component={NuevaHerramienta} />
          <Route exact path="/herramientas/editar/:id" component={EditarHerramienta} />
          <Route exact path="/herramientas/prestamo/:id" component={EditarHerramienta} />

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
