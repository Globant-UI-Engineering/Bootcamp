import React from 'react';

export default class ListElement extends React.Component {
    constructor(){
        super();
        this.state = {
            done:"false"
        }
    }

    taskDone(){
        console.log("li pressed");
        this.setState({
            done: this.state.done === "true" ? "false" : "true"
        });
    }

    render(){
        return(
            <li onClick = {this.taskDone.bind(this)} done = {this.state.done}>{this.props.name}</li>
        );
    }
}