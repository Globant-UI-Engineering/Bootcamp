import React from 'react';
import './Detail.css';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import updateUserInput from '../../redux/actions/updateUserInput'
import fireBaseInit from '../FirebaseInit'
import {connect} from 'react-redux'

var beforeTitle,beforeContent = "";
const TITLE = "title", CONTENT = "content";
const firebaseRef = fireBaseInit.database().ref()

class Detail extends React.Component {
  constructor(props){
    super();
    this.state = {
      title:props.title,
      content:props.content,
      id:props.id
    }
    beforeContent = this.state.content;
    beforeTitle = this.state.title;
    this.auto_grow = this.auto_grow.bind(this);
    this.updateTechnology = this.updateTechnology.bind(this);
  }

  render () {

    return (
      <div className = "detail-layout">
        <div className = "detail">
          <header className = "detail-title">
            {/* <h1>{this.props.title}</h1> */}
              <input className = "detail-title-input"value  = {this.state.title}
                onChange = {event =>this.setState({title:event.target.value})}
                onBlur = {event => this.updateTechnology(event.target.value,TITLE)}></input>
          </header>
          <content className = "detail-body">
            <section >
              {/* <p contentEditable="true">{this.props.content}</p> */}
              <textarea className = "detail-content" value = {this.state.content}
                onKeyPress={event=>this.auto_grow(event.target)}
                onMouseOver={event=>this.auto_grow(event.target)}
                onChange = {event =>this.setState({content:event.target.value})}
                onBlur = {event => this.updateTechnology(event.target.value,CONTENT)} ></textarea>
            </section>
            <section className = "detail-image">
              <img src = {this.props.image} alt = "detail" ></img>
            </section>
          </content>
        </div>
        <footer className = "detail-back-button">
          <Link to= {`/`} >
            <button className = "back-button">Back to Search</button>
          </Link>
        </footer>
    </div>
    )}

  auto_grow(element) {
      element.style.height = "5px";
      element.style.height = (element.scrollHeight)+"px";
  }

  updateTechnology(text,attribute){
    var props = this.props;
    if(attribute === CONTENT && text !== beforeContent){
      firebaseRef.child(this.state.id).update({content:text},function(error){
        if(error){
          console.log("unexpected error");
        }
        else{
          beforeContent = text;
          props.updateUserInput("");
        }  
      });
    }else if(attribute === TITLE && text !== beforeTitle){
      firebaseRef.child(this.state.id).update({title:text},function(error){
        if(error){
          console.log("unexpected error");
        }
        else{
          beforeTitle = text;
          props.updateUserInput("");
        }
      })
    }
  }


}

Detail.propTypes  = {
  title:PropTypes.string,
  image: PropTypes.string,
  content:PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    inputValue:state.inputValue
  }
};

const mapDispatchToProps = {
  updateUserInput
};

export default  connect(mapStateToProps,mapDispatchToProps) (Detail);

