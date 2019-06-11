import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import { TODO_URL } from "./constants/connection";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	render() {
		return (
			<div className="app">
				<h1>My TODO List</h1>
				{this.state.data.length !== 0 ? <TodoList data={this.state.data}></TodoList> : <h2>Cargando...</h2>}
			</div>
		);
	}

	componentDidMount() {
		fetch(TODO_URL).then((response) => response.json()).then((dataResponse) => {
			this.setState(
				{ data: dataResponse.todoList }
			)
		});
	}
}

export default App;
