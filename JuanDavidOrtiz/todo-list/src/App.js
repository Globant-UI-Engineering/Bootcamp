import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import TodoApp from './Components/TodoApp';
import NewTodo from './Components/NewTodo';


class App extends React.Component{

    render(){
        return( 
            <BrowserRouter>
            <Switch>
            <Route path="/" component={TodoApp} exact/>
            <Route path="/newtodo" component={NewTodo} />
            </Switch>
            </BrowserRouter>
        );
    }
}
export default App;