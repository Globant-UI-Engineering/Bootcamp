import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Formulario from './Formulario';
import Tasklist from './Tasklist';
import DeletedTasklist from './DeletedTaskList';
import Navbar from './Navbar';


class Router extends Component{


  render() {
    return (
      <div className="container mt-3 pb-3 text-white">
      <Header titulo="TODO list"/>
        <div className="row ">
          <div className="col-md-12">
            <Formulario/>
          </div>
        </div>
        <BrowserRouter>
          <div className="bg-white text-dark p-5">
          <h3 className="text-center">Lista de Tareas</h3>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Tasklist}></Route>
            <Route exact path="/agregadas" component={Tasklist}></Route>
            <Route exact path="/eliminadas" component={DeletedTasklist}></Route>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;