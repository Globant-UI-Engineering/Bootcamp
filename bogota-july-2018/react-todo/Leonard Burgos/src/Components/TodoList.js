import React from 'react';
import ListElement from './ListElement.js';

export default class TodoList extends React.Component {
    constructor(){
        super();
    }

    render(){
        let todos = [];
        var cont = 1;
        this.props.data.forEach((element) => {
            if (element !== ""){
                todos.push(<ListElement name = {element} key = {cont}/>)
                cont ++;
            }
        });
        return(
            <div className = "mylist">
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}