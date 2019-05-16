import React from 'react';
import './SearchPanel.css';
import fireBaseInit from '../FirebaseInit'
import logo from '../../../src/logo.svg'

const firebaseRef = fireBaseInit.database().ref().child("technology");
class SearchPanel extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
      allTechnologys : [],
      technologys : ["prueba1","prueba2"],
      dataNotLoaded:true
      
    }

    this.findTechnologys = this.findTechnologys.bind(this);
  }

  componentDidMount(){
    // read from firebase 
    firebaseRef.once('value', snapshot => {
       let allTechnologys  = this.allTechnologys = snapshot.val()
        this.setState({technologys : allTechnologys.map((object) => (object.title)),
          dataNotLoaded:false,allTechnologys});
      });
      
  }

  findTechnologys(event){
    var userInput = event.target.value.toLowerCase();
    let results = this.allTechnologys.filter((element) =>{
      return element.title.toLowerCase().includes(userInput)?element.title:"";
    })
    this.setState({technologys : results.map((element) => (element.title))});
  }



  render () {
    
    return (
    <div className="SearchPanel">
      <header className="SearchPanel-header">
        
        <img src = {logo} alt = "logo"></img>
        <input placeholder = "What are you looking for..." onKeyUp = {this.findTechnologys}
              disabled = {this.state.dataNotLoaded}></input>
        <img src = {logo} alt = "logo" ></img>
      </header>
      <article>
        <p>
          {this.state.technologys}
        </p>
      </article>
    </div>
    )}
}

export default SearchPanel;

