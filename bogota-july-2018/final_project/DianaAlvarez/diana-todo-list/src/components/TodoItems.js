import React, {Component} from 'react';
import FlipMove from 'react-flip-move';
import {connect} from 'react-redux';


class TodoItems extends Component {
    constructor (props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item){
        return  <li onClick={() => this.delete(item.id)} key={item.id}> 
                   {item.title}
                </li>;
    }
    addItem(e){
        e.preventDefault();
        let value = this._inputElement.value;
        if (value !== ''){
            this.props.addItemToList({
                title: this._inputElement.value,
                id: Date.now()

            })
        } 
        this._inputElement.value = '';
    }
    delete(key){
        this.props.delete(key);
    }
    render(){
        const todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
        return (
            <ul className='theList'>
                <FlipMove duration={500} easing='ease-out'>
                    {listItems}
                </FlipMove>
            </ul>
        ); 
    }
}

export default connect()(TodoItems);