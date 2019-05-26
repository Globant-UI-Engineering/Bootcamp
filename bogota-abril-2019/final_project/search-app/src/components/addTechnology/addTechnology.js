import React from 'react';
import './addTechnology.css';
import fireBaseInit from '../FirebaseInit'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const firebaseRef = fireBaseInit.database().ref()
class AddTechnology extends React.Component {
  constructor(props){
    super();
    this.state = {
      title:"",
      content:"",
      imgUrl:""
    }
    this.auto_grow = this.auto_grow.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
  }

  render () {

    return (
      <div className = "add-layout">
        <div className = "add">
          <h1>Add new technology</h1>
          <section className = "add-section">
              <input className = "add-input" value  = {this.state.title} placeholder = "Title..."
                onChange = {event =>this.setState({title:event.target.value})}
                ></input>
          </section>
          <section className = "add-section">
            <textarea className = "add-textarea" value = {this.state.content} placeholder = "Description..."
              onKeyPress={event=>this.auto_grow(event.target)}
              onChange = {event =>this.setState({content:event.target.value})}
              ></textarea>
          </section>
          <section className = "add-section">
            <input className = "add-input"value  = {this.state.imgUrl} placeholder = "Image Url..."
              onChange = {event =>this.setState({imgUrl:event.target.value})}
              ></input>
          </section>
        </div>
        <footer className = "add-back-button">
        <button id = "add-Button" onClick={() => this.addClickHandler()}>Add</button>
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

  addClickHandler(){
    
  }

}


const mapStateToProps = (state) => {
  return {
    allTechnologys:state.allTechnologys
  }
};

const mapDispatchToProps = {};

export default  connect(mapStateToProps,mapDispatchToProps) (AddTechnology);

