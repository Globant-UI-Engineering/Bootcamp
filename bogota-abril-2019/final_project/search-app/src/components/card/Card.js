import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import updateAllTechnologys from '../../redux/actions/updateAllTechnologys'
import findTechnologys from '../../redux/actions/findTechnologys'
import updateUserInput from '../../redux/actions/updateUserInput'
import fireBaseInit from '../FirebaseInit'
import {connect} from 'react-redux'

const firebaseRef = fireBaseInit.database().ref()

class Card extends React.Component {

  constructor(){
    super();
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
  }

  render () {
    return (
      <section  className="card">
        <button className = "delete-button" onClick={() => this.deleteClickHandler(this.props.id)}>Delete</button>
        <Link to= {`/detail/`+this.props.id}>
          <section className="content">
            <h1>{this.props.title}</h1>
            <img src = {this.props.image} alt = "result" className = "result-image"></img>
          </section>
        </Link>
      </section>
    )}

    deleteClickHandler(id){
      firebaseRef.child(id).remove().then((result)=>{
        let newArray = this.props.allTechnologys.filter(element => element.id!==id);
        this.props.updateAllTechnologys(newArray);
        this.props.findTechnologys({userInput:"", technologys:newArray})
        this.props.updateUserInput("")
      });
    }
}

const mapStateToProps = (state) => {
  return {
    technologys:state.restultList,
    allTechnologys:state.allTechnologys,
    inputValue:state.inputValue
  }
};

const mapDispatchToProps = {
  findTechnologys,
  updateAllTechnologys,
  updateUserInput
};



Card.propTypes  = {
  title:PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps) (Card);

