import React from 'react';
import './SearchPanel.css';
import fireBaseInit from '../FirebaseInit'
import logo from '../../../src/images/logo.svg'
import Card from '../card/Card'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import findTechnologys from '../../redux/actions/findTechnologys'
import updateAllTechnologys from '../../redux/actions/updateAllTechnologys'
import Detail from '../detail/Detail';

const firebaseRef = fireBaseInit.database().ref().child("technology");

class SearchPanel extends React.Component {
  
  constructor(){
    super();
    
    this.state = {
      dataNotLoaded:true
    }
    
    this.findTechnologys = this.findTechnologys.bind(this);
    this.cardClickHandler = this.cardClickHandler.bind(this);
  }

  render () {
    const {technologys} = this.props;
    return (
    <div className="SearchPanel">
      <header className="SearchPanel-header">
        
        <img src = {logo} alt = "logo"></img>
        <input placeholder = "What are you looking for..." onKeyUp = {this.findTechnologys}
              disabled = {this.state.dataNotLoaded}></input>
        <img src = {logo} alt = "logo" ></img>
      </header>
      <article className = "results-content">
          {technologys.map (this.technologysAsCard)}
      </article>
    </div>
  )}

  technologysAsCard = (object)=>(
    <Link key={object.id} to= {`/detail/`+object.id} 
      onClick={() => this.cardClickHandler(object)}>
      <Card title = {object.title} image = {object.image} 
        ></Card>
    </Link>
  );
  
  componentDidMount(){
    // read from firebase 
    firebaseRef.once('value', snapshot => {
       let allTechnologys  = snapshot.val();
        this.setState({dataNotLoaded:false});
        this.props.updateAllTechnologys(allTechnologys);
        this.props.findTechnologys({userInput:"", technologys:allTechnologys})
    });  
  }

  findTechnologys(event){
    this.props.findTechnologys({userInput:event.target.value.toLowerCase(), technologys:this.props.allTechnologys})
  }

  cardClickHandler(object){
    Detail.defaultProps = object;
  }

}

const mapStateToProps = (state) => {
  return {
    technologys:state.restultList,
    allTechnologys:state.allTechnologys
  }
};

const mapDispatchToProps = {
  findTechnologys,
  updateAllTechnologys
};

export default connect(mapStateToProps,mapDispatchToProps) (SearchPanel);
