//Dependencies
import React, { Component } from 'react';

//Components
import TodoItems from './TodoItems'
//Styles
import '../styles/Todolist.css'
//Principal Class

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state=
        {
            userInput:'',
            task:[{
                   tasks:'Learn React',
                    key:Date.now()
                  },
                  {
                    tasks:'Create react app',
                    key:Date.now()+1
                   },
                   {
                     tasks:'Learn Angular',
                     key:Date.now()+2
                    }
                  ],   
        }
   this.deleteItem=this.deleteItem.bind(this);
    }


    changeUserInput(input){
        this.setState({
            userInput:input    
        })
    }

    deleteItem(key){
        var filterItems=this.state.task.filter(function (item){
            return (item.key!==key)
        });
        this.setState({
            task:filterItems,
        })

    }

    addTask(input){
        if(input!==""){
            var newTask={
                tasks:input,
                key:Date.now()
            }

            this.setState({
                task:this.state.task.concat(newTask),
                 userInput:'',
             })
        };
    }
    render(){
        return(
            <div className="todoList">
                <div className="containerComponents">
                   <input className="boxTask" type="text" onChange={(e)=>this.changeUserInput(e.target.value)} value={this.state.userInput} placeholder="Enter Task" aria-label="Write yor task" />
                   <button className="addTodoButton" onClick={()=>this.addTask(this.state.userInput)}>Add</button>
                   <TodoItems items={this.state.task} delete={this.deleteItem} />
                </div>
            </div>
        );
    }

}
export default Todolist;