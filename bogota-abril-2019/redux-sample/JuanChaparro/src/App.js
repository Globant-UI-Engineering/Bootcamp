import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import Summary from "./components/Summary";
import { TODO_URL } from "./constants/connection";
import store from "./store";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		
		this.state = {
			data: []
		}

		store.subscribe(() => {
			this.setState({
				data: store.getState().data,
			});
		});
	}

	render() {
		return (
			<div className="app">
				<h1>My TODO List</h1>
				{this.state.data.length !== 0 ? 
					<TodoList data={this.state.data}></TodoList> : <h2>Cargando...</h2>}
				{this.state.data.length !== 0 ? 
					<Summary done={this.countCompletedTasks()} notDone={this.countUncompletedTasks()}></Summary> : null}
			</div>
		);
	}

	componentDidMount() {
		fetch(TODO_URL).then((response) => response.json()).then((dataResponse) => {
			store.dispatch({
				type: "UPDATE",
				element: dataResponse.todoList,
			});
		});
	}

	countCompletedTasks() {
		return this.state.data.filter(todo => todo.done).length;
	}

	countUncompletedTasks() {
		return this.state.data.filter(todo => !todo.done).length;
	}
}

export default App;
