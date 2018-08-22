import React, {Component} from 'react';
import ProductList from './ProductList';

class ShoppingCart extends Component{

    constructor(props){
        super(props);
        this.state=
        {
            userInput:'',
            task:[{
                   tasks:'Tennese Honey  49.9$',
                    key:Date.now()
                  },
                  {
                    tasks:'No. 7 49.9$',
                    key:Date.now()+1
                   },
                   {
                     tasks:'No. 7 49.9$',
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
                   <input className="boxTask" type="text" onChange={(e)=>this.changeUserInput(e.target.value)} value={this.state.userInput} placeholder="Add Product" aria-label="Write yor task" />
                   <button className="addTodoButton" onClick={()=>this.addTask(this.state.userInput)}>Add</button>
                   <ProductList items={this.state.task} delete={this.deleteItem} />
                </div>
            </div>
        );
    }

}
export default ShoppingCart;