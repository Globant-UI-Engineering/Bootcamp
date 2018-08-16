import React from 'react';
import {Component} from 'react';


class AddTask extends Component {
  constructor(props){
    super(props);
    this.state={
      userInput:'',
      list:[]
    }
 this.handleChangeUserInput=this.handleChangeUserInput.bind(this);

  }
//Methods events 
handleAddTask(newTask){
  let listArray=this.state.list;
  listArray.push(newTask);
  this.setState({
    list:listArray,
    userInput:''
  },()=>console.log(listArray))
}
handleChangeUserInput(e){
  let input=e.target.value;
  this.setState({
   userInput:input
  })
}
  render(){
    return(
      <div>
     <input id="taskContainer" value={this.state.userInput} type="Text" placeholder="Add a task" onChange={this.handleChangeUserInput}></input>
     <button onClick={()=>this.handleAddTask(this.state.userInput)}>Add</button>
      <ul>
        {this.state.list.map((val,key)=><li key={key}>{val}<button>Delete</button></li>)}
      </ul>
      </div>
    );
}

}

export default AddTask