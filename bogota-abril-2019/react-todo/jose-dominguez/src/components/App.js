import React from 'react';
import './App.css';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

function App() {
    return (
        <section className="todoapp">
            <header>
                <h1>
                    todos
            </h1>
            </header>
            <article>
                <AddTodo />
                <VisibleTodoList />
            </article>
            <footer>
                <Footer />
            </footer>
        </section>
    );
}

export default App;
