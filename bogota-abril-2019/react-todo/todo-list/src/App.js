import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import exercise from './img/exercise.jpg'
import girlfriend from './img/girlfriend.jpg'
import globant from './img/globant.jpg'
import pets from './img/pets.jpg'
import rest from './img/rest.jpg'
import Work from './img/work.jpg'



function App() {
  const felipeList = ["Go to gym", "Work hard","Work on globant","Spend time with pets",
                      "Keep girlfriend happy","Take a rest"]
  const linkList = (task) => (<li key = {task.toString()}><Link to={'/'+task.toString()} >{task}</Link></li>);
  const checkList = (task) => (<li key = {task.toString()}>{task}</li>);

  return (
    <div className="Todo-list">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className = "content" >
        <article >
        <h1> Felipe To-do List:</h1>
          <ol  onClick={itemClickHandler}>
            {felipeList.map(checkList)}
          </ol>
        </article>  
        <article className = "routing-content">
        <BrowserRouter>
            <aside>
            <h1>Felipe To-do Link List:</h1>
              <ol  onClick={itemClickHandler}>
                {felipeList.map(linkList)}
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
      </div>
    </div>
  );
}

function itemClickHandler (event){
  event.target.classList.toggle('checked');
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
export default App;

