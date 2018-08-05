import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NewTodo from './NewTodo/NewTodo';

ReactDOM.render(<NewTodo />, document.getElementById('root'));
registerServiceWorker();
