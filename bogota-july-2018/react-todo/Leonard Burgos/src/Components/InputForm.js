import React from 'react';

export default class InputForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="InputForm">
                <input className = "input-todo" type="text" placeholder="Input your new TODOS here!" onChange = {this.props.onChange}/>
                <button className="submit" onClick={this.props.addTodo}>+</button>
            </div>
        );
    }
}