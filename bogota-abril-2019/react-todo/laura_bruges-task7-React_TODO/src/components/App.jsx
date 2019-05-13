import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import '../App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: true
        }
        this.displayInput = this.displayInput.bind(this);
    }

    displayInput() {
        let showInput = this.state.showInput;
        this.setState({
            showInput: !showInput
        });
    }

    render() {
        return (
            <article className='container'>
                <header>
                    <h1>To-do list <span onClick={this.displayInput}>{this.state.showAddInput ? '-':'+'}</span></h1>
                </header>
                <AddTodo inputVisible={this.state.showInput} />  
                <VisibleTodoList />
                <Footer />
            </article>
        );
    }
}

export default App;