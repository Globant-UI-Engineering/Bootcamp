import React, {Component} from 'react'
import TodoList from "../todos/TodoList"
import {connect} from "react-redux"

class Dashboard extends Component {
    render(){
        const {todos} = this.props;
        return (
            <article className="container">
                <div className="col">
                     <div className="col m6">
                        <TodoList todos={todos}/>
                    </div>
                </div>
            </article>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Dashboard);

