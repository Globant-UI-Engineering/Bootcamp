import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Persona from './componentes/persona/Persona';
import MostrarPersona from './componentes/persona/MostrarPersona';
import EditarPersona from './componentes/persona/EditarPersona';
import NuevaPersona from './componentes/persona/NuevaPersona';

import Herramienta from './componentes/herramientas/Herramientas';
import EditarHerramienta from './componentes/herramientas/EditarHerramienta';
import NuevaHerramienta from './componentes/herramientas/NuevaHerramienta';
import MostrarHerramienta from './componentes/herramientas/MostrarHerramienta';
import PrestamoHerramienta from './componentes/herramientas/PrestamoHerramienta';
import Login from './componentes/autenticacion/Login';

import BarraNavegacion from './componentes/layout/BarraNavegacion.js';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './componentes/autenticacion/authHelper';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <BarraNavegacion />
        <Switch>
          <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />

          <Route exact path="/" component={UserIsAuthenticated(Herramienta)} />
          <Route exact path="/herramientas/mostrar/:id" component={UserIsAuthenticated(MostrarHerramienta)} />
          <Route exact path="/herramientas/nueva" component={UserIsAuthenticated(NuevaHerramienta)} />
          <Route exact path="/herramientas/editar/:id" component={UserIsAuthenticated(EditarHerramienta)} />
          <Route exact path="/herramientas/prestamo/:id" component={UserIsAuthenticated(PrestamoHerramienta)} />

          <Route exact path="/Usuarios" component={UserIsAuthenticated(Persona)} />
          <Route exact path="/personas/nueva" component={UserIsAuthenticated(NuevaPersona)} />
          <Route exact path="/personas/mostrar/:id" component={UserIsAuthenticated(MostrarPersona)} />
          <Route exact path="/personas/editar/:id" component={UserIsAuthenticated(EditarPersona)} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
