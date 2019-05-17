import React from 'react';
import './SearchPanel.css';
import fireBaseInit from '../FirebaseInit'
import logo from '../../../src/images/logo.svg'
import loading from '../../../src/images/loading.gif'
import Card from '../card/Card'

const firebaseRef = fireBaseInit.database().ref().child("technology");
class SearchPanel extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
      allTechnologys : [],
      technologys : [{title:"Loading",id:1,image:loading},{title:"Loading",id:2,image:loading}],
      dataNotLoaded:true
      
    }

    this.findTechnologys = this.findTechnologys.bind(this);
  }

  componentDidMount(){
    // read from firebase 
    firebaseRef.once('value', snapshot => {
       let allTechnologys  = this.allTechnologys = snapshot.val()
        this.setState({technologys : allTechnologys,
          dataNotLoaded:false,allTechnologys});
      });
      
  }

  findTechnologys(event){
    var userInput = event.target.value.toLowerCase();
    let results = this.allTechnologys.filter((element) =>{
      return element.title.toLowerCase().includes(userInput)?element.title:"";
    })
    this.setState({technologys : results.map((element) => ({title:element.title,image:element.image,id:element.id}))});
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
      <article className = "results-content">
          {this.state.technologys.map (object => (
            <Card key={object.id}  title = {object.title} image = {object.image}></Card>
          ))}
      </article>
    </div>
    )}
}

export default SearchPanel;

