import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import exercise from '../../img/exercise.jpg'
import girlfriend from '../../img/girlfriend.jpg'
import globant from '../../img/globant.jpg'
import pets from '../../img/pets.jpg'
import rest from '../../img/rest.jpg'
import Work from '../../img/work.jpg'
import './Todo-list-routing.css';




export default class TodoListRouting extends React.Component{

  cssStyles = ["red","blue","yellow"]    
  felipeList = [];
  constructor(props){
    super();
    this.felipeList = props.lista;

    this.state = {
      currentBackGroung: this.cssStyles[0]
    }

    this.itemClickHandler = this.itemClickHandler.bind(this);
  }
    

  itemClickHandler (event){
    event.target.classList.toggle('checked');
    const rand = Math.floor(0 + Math.random() * (3));
    this.setState({ currentBackGroung: this.cssStyles[rand]});
  }
 
  render(){
    const linkList = (task) => (<li key = {task.toString()}><Link to={'/'+task.toString()} >{task}</Link></li>);
    var  stateCss = this.state.currentBackGroung!==undefined ? this.state.currentBackGroung:"";

    return(
    <article className = "routing-content">  
      <BrowserRouter>
        <aside>
        <h1 className={stateCss} >Felipe To-do Link List:</h1>
          <ol  onClick={this.itemClickHandler}>
            {this.felipeList.map(linkList)}
          </ol>
        </aside>
        <main>
          <Route path="/Go to gym" component={AppExercise} />
          <Route path="/Work hard" component={AppWork} />
          <Route path="/Work on globant" component={AppGlobant} />
          <Route path="/Spend time with pets" component={AppPets} />
          <Route path="/Keep girlfriend happy" component={AppGirlfriend} />
          <Route path="/Take a rest" component={AppRest} />
        </main>
      </BrowserRouter>   
    </article>  
    );
  }
}


const AppExercise = () => (
  <img src={exercise} alt="exercise" />
)

const AppWork = () => (
  <img src={Work} alt="work" />
)

const AppGlobant = () => (
  <img src={globant} alt="globant" />
)

const AppPets = () => (
  <img src={pets} alt="pets" />
)

const AppGirlfriend = () => (
  <img src={girlfriend} alt="girlfriend" />
)

const AppRest= () => (
  <img src={rest} alt="rest" />
)