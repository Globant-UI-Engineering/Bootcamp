import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TaskPage from './views/Task/TaskPage';
import NavigationBar from './components/Appbar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <main className="wrapper-content">
          <Route path='/' exact component={TaskPage} />
        </main>  
      </div>
    );
  }
}

export default App;
