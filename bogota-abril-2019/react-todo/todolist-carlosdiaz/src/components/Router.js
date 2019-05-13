import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Formulario from './Formulario';
import Tasklist from './Tasklist';
import DeletedTasklist from './DeletedTaskList';
import Navbar from './Navbar';


class Router extends Component{

constructor(props){
    super(props);
    this.state = {
      tareas : [],
      tareasEliminadas:[]
    }
  }

  componentDidMount(){
    const tareasGuardadas= localStorage.getItem('tareas');
    const tareasEliminadas= localStorage.getItem('eliminadas');
    if(tareasGuardadas || tareasEliminadas ){
      this.setState({
        tareas:JSON.parse(tareasGuardadas),
        tareasEliminadas: JSON.parse(tareasEliminadas)
      })
    }
    
  }

  componentDidUpdate(){
    localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
    localStorage.setItem('eliminadas', JSON.stringify(this.state.tareasEliminadas));
  }

  agregarTarea = tarea =>{
    const tareas = [...this.state.tareas, tarea];
    this.setState({
      tareas
    });
  }

  borrarTarea = id_borrar =>{
    const tareas = [...this.state.tareas];
    const tareasFiltered= tareas.filter( tarea => tarea.id!== id_borrar);
    this.setState({
      tareas:tareasFiltered
    });
  }

  agregarEliminados = eliminado =>{
    const tareasEliminadas = [...this.state.tareasEliminadas];
    tareasEliminadas.push(eliminado);
    this.setState({
      tareasEliminadas
    });
  }

  borrarTodo = () => {
    this.setState({
      tareasEliminadas:[]
    })
  }

  render() {
    return (
      <div className="container mt-3 pb-3 text-white">
      <Header titulo="TODO list"/>
        <div className="row ">
          <div className="col-md-12">
            <Formulario agregarTarea={this.agregarTarea}/>
          </div>
        </div>
        <BrowserRouter>
        <div className="bg-white text-dark p-5">
            <h3 className="text-center">Lista de Tareas</h3>
            <Navbar/>
            <hr></hr>
            <Switch>
              <Route exact path="/" render={() => (
                    <Tasklist tareas={this.state.tareas} borrarTarea={this.borrarTarea} agregarEliminados={this.agregarEliminados}/>
                    )}>
                </Route>
                <Route exact path="/agregadas" render={() => (
                    <Tasklist tareas={this.state.tareas} borrarTarea={this.borrarTarea} agregarEliminados={this.agregarEliminados}/>
                    )}>
                </Route>
                <Route exact path="/eliminadas" render={() => (
                    <DeletedTasklist tareasEliminadas={this.state.tareasEliminadas} borrarTodo={this.borrarTodo}/>
                    )}>
                </Route>
            </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;