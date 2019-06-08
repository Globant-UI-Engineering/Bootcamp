import React from 'react';
import './addTechnology.css';
import fireBaseInit from '../FirebaseInit'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router';
import Popup from '../popup/Popup'
import Loading from '../loading/Loading'

const firebaseRef = fireBaseInit.database().ref()
class AddTechnology extends React.Component {
  constructor(){
    super();
    this.state = {
      title:"",
      content:"",
      imgUrl:"",
      backToSearch:false,
      showPopup: false,
      messagePopup:"",
      loading:false
    }
    this.auto_grow = this.auto_grow.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
  }

  render () {
    if(this.state.backToSearch){
      return <Redirect push to = "/"></Redirect>
    }
    return (
      <div className = "add-layout">
      {this.state.loading? <Loading></Loading>:null}
      {this.state.showPopup ? <Popup text={this.state.messagePopup}/> : null}
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
    if(this.validateUpdate()){
      this.setLoading(true);
      var context = this;
      var newChild = firebaseRef.push({
        id : 0,
        title: this.state.title,
        content:this.state.content,
        image:this.state.imgUrl
      },function(error){
        if(error){
          context.setLoading(false);
          context.delayPopup({showPopup:true,messagePopup:"Unexpected error, try again"});
        }else{
          var id = newChild.key;
          firebaseRef.child(id).update({id:id},function(error){
            if(error){
              context.setLoading(false);
              context.delayPopup({showPopup:true,messagePopup:"Unexpected Error"});
            }else{
              context.setLoading(false);
              context.delayPopup({showPopup:true,messagePopup:"Created"});
            }
          })
        }
      })
    }else{
      this.delayPopup({showPopup:true,messagePopup:"Please at least fill the title"},false);
    }
  }

  validateUpdate(){
    return this.state.title!==""?true:false;
  }

  delayPopup = function(states,back=true){
    this.setState(states)
    setTimeout(()=>{
      this.setState({showPopup:false,backToSearch:back})
    },1000)
  }

  setLoading(show){
    this.setState({loading:show});
  }
}


export default  AddTechnology;

