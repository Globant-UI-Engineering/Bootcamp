import React from 'react';
import './SearchPanel.css';
import fireBaseInit from '../FirebaseInit'
import logo from '../../../src/images/logo.svg'
import Card from '../card/Card'
import {connect} from 'react-redux'
import findTechnologys from '../../redux/actions/findTechnologys'
import updateAllTechnologys from '../../redux/actions/updateAllTechnologys'
import updateUserInput from '../../redux/actions/updateUserInput'
import Detail from '../detail/Detail';
import {Link} from 'react-router-dom'

const firebaseRef = fireBaseInit.database().ref();

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
    const {technologys ,inputValue} = this.props;
    return ( 
    <div className="SearchPanel">
      <header className="SearchPanel-header">
        
        <img src = {logo} alt = "logo"></img>
        <input className="search-input" placeholder = "What are you looking for..." onKeyUp = {this.findTechnologys}
              disabled = {this.state.dataNotLoaded} value = {inputValue}
              onChange={event=>this.props.updateUserInput(event.target.value)}></input>
        <img src = {logo} alt = "logo" ></img>
      </header>
      <section className = "add-result">
        <Link to= {`/add`} >
          <button >Add Technology</button>
        </Link>
      </section>
      <article className = "results-content">
          {technologys.map (this.technologysAsCard)}
      </article>
    </div>
  )}

  technologysAsCard = (object)=>(
    <div  key={object.id}  onClick={() => this.cardClickHandler(object)}>
      <Card title = {object.title} image = {object.image} 
        id = {object.id} ></Card>
    </div>
  );
  
  componentDidMount(){
    // read from firebase 
    firebaseRef.once('value', snapshot => {
       let allTechnologys  = Object.values(snapshot.val()); 
        this.setState({dataNotLoaded:false});
        this.props.updateAllTechnologys(allTechnologys);
        this.props.findTechnologys({userInput:this.props.inputValue, technologys:allTechnologys})
    });  
  }

  findTechnologys(event){
    this.props.findTechnologys({userInput:event.target.value.toLowerCase(),
       technologys:this.props.allTechnologys})
  }

  cardClickHandler(object){
    Detail.defaultProps = object;
  }

}

const mapStateToProps = (state) => {
  return {
    technologys:state.restultList,
    allTechnologys:state.allTechnologys,
    inputValue:state.userInput
  }
};

const mapDispatchToProps = {
  findTechnologys,
  updateAllTechnologys,
  updateUserInput
};

export default connect(mapStateToProps,mapDispatchToProps) (SearchPanel);
