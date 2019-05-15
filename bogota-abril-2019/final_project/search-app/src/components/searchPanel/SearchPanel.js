import React from 'react';
import './SearchPanel.css';
import fireBaseInit from '../FirebaseInit'

const firebaseRef = fireBaseInit.database().ref().child("technology");
class SearchPanel extends React.Component {
  constructor(){
    super();
    this.state = {
      technologys : ["prueba1","prueba2"]
    }
  }

  componentDidMount(){
    // read from firebase
    firebaseRef.once('value', snapshot => {
        const technologys = snapshot.val().map((object)=>(object.title))
        this.setState({technologys});
      });
      
  }

  render () {
    
    return (
    <div className="SearchPanel">
      <header className="SearchPanel-header">
        <p>
        {this.state.technologys}
        </p>
      </header>
    </div>
    )}
}

export default SearchPanel;

