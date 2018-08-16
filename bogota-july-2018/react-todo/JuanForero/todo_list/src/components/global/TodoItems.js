//Dependencie
import React, { Component } from 'react';
//import FlipMove from 'react-flip-move';
//Styles
import '../styles/TodoItems.css'

class TodoItems extends Component{

delete(key){
    console.log("Key is: "+key)
    this.props.delete(key)
}
render(){
    var todoItems=this.props.items;
    return(
      todoItems.map((item)=>
      <div className="itemsTodoList" key={item.key}>  
          <div onClick={()=>this.delete(item.key)}>
               {item.tasks} 
          </div>
      
      </div>
        )
    );
}
}
export default TodoItems;