import React, { Component } from 'react';
import './add.css';
class Add extends Component {
    // constructor() {
    //     super();
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    onSubmit = (event) => {

        event.preventDefault();
        //console.log(this.refs.itemRef.value);
        var newItem = this.refs.itemRef.value;

        if (newItem) {
            this.props.onAdd({ newItem });
            this.refs.formAdd.reset();
        }
    }
    componentDidMount() {
        this.refs.itemRef.focus();
    }
    render() {
        return (
            <form ref="formAdd" className="form-inline rounded bg-light" onSubmit={this.onSubmit}>
                <label><strong>Add new item:</strong></label>
                <input type="text" ref="itemRef" className="form-control" placeholder="Item" />

                <button type="submit" className="btn btn-primary">Add new task</button>
            </form>

        );
    }
}

export default Add;