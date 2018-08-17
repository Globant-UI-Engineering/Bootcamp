import React, { Component } from 'react';
import TodoItems from './TodoItems';
import '../css/TodoList.css'
import {connect} from 'react-redux';
import { getPostList, addItemToList, deleteItemToList } from '../actions/PostActions';


class TodoList extends Component {
    constructor (props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentWillMount() {
        this.props.getPostList();
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
    deleteItem(id){
        this.props.deleteItemToList({
            id: id
        })    
    }
    render() {
        return (
            <div className='todoListMain'>
               <div className='header'>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} placeholder='Enter  your task'>
                    </input>
                    <button type='submit'>add</button>
                </form>
              </div>
              <TodoItems entries={this.props.postList} delete={this.deleteItem} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      postList: state.PostReducers.postList,
      todoList: state.PostReducers.todoList

    }
};
const mapDispatchToProps = dispatch => {
    return {
      getPostList: () => {
        dispatch(getPostList())
      },
      addItemToList: (item) => {
        dispatch(addItemToList(item))
      },
      deleteItemToList: (id) => {
        dispatch(deleteItemToList(id))
      }

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);