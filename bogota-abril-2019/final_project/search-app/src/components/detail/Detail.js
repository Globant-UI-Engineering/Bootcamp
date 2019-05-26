import React from 'react';
import './Detail.css';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import updateUserInput from '../../redux/actions/updateUserInput'
import fireBaseInit from '../FirebaseInit'
import {connect} from 'react-redux'
import Popup from '../popup/Popup'
import Loading from '../loading/Loading'

var beforeTitle,beforeContent = "";
const TITLE = "title", CONTENT = "content";
const firebaseRef = fireBaseInit.database().ref()

class Detail extends React.Component {
  constructor(props){
    super();
    this.state = {
      title:props.title,
      content:props.content,
      id:props.id,
      showPopup: false,
      messagePopup:"",
      loading:false
    }
    beforeContent = this.state.content;
    beforeTitle = this.state.title;
    this.myContentRef = React.createRef();
    this.autoGrow = this.autoGrow.bind(this);
    this.updateTechnology = this.updateTechnology.bind(this);
  }

  render () {

    return (
      <div className = "detail-layout">
      {this.state.loading? <Loading></Loading>:null}
      {this.state.showPopup ? <Popup text={this.state.messagePopup}/> : null}
        <div className = "detail">
          <header className = "detail-title">
            {/* <h1>{this.props.title}</h1> */}
              <input className = "detail-title-input"value  = {this.state.title}
                onChange = {event =>this.setState({title:event.target.value})}
                onBlur = {event => this.updateTechnology(event.target.value,TITLE)}
                maxLength = "12"></input>
          </header>
          <content className = "detail-body">
            <section >
              {/* <p contentEditable="true">{this.props.content}</p> */}
              <textarea className = "detail-content" value = {this.state.content}
                onKeyPress={event=>this.autoGrow(event.target)}
                // onMouseOver={event=>this.autoGrow(event.target)}
                onChange = {event =>this.setState({content:event.target.value})}
                onBlur = {event => this.updateTechnology(event.target.value,CONTENT)} 
                ref={this.myContentRef}></textarea>
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

  componentDidMount() {
    this.autoGrow(this.myContentRef.current);
  }

  autoGrow(element) {
      element.style.height = "5px";
      element.style.height = (element.scrollHeight)+"px";
  }

  updateTechnology(text,attribute){
    var props = this.props;
    var context = this;
    if(attribute === CONTENT && text !== beforeContent){
      this.setLoading(true);
      firebaseRef.child(this.state.id).update({content:text},function(error){
        if(error){
          context.setLoading(false);
          context.delayPopup({showPopup:true,messagePopup:"Unexpected error, try again"});
        }
        else{
          context.setLoading(false);
          beforeContent = text;
          props.updateUserInput("");
          context.delayPopup({showPopup:true,messagePopup:"Updated"});
        }  
      });
    }else if(attribute === TITLE && text !== beforeTitle){
      this.setLoading(true);
      firebaseRef.child(this.state.id).update({title:text},function(error){
        if(error){
          context.setLoading(false);
          context.delayPopup({showPopup:true,messagePopup:"Unexpected error, try again"});
        }
        else{
          context.setLoading(false);
          beforeTitle = text;
          props.updateUserInput("");
          context.delayPopup({showPopup:true,messagePopup:"Updated"});
        }
      })
    }
  }

  delayPopup = function(states){
    this.setState(states)
    setTimeout(()=>{
      this.setState({showPopup:false})
    },500)
  }

  setLoading(show){
    this.setState({loading:show});
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

