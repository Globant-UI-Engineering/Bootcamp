import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPanel from './components/searchPanel/SearchPanel';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import Detail from './components/detail/Detail'
import AddTechnology from './components/addTechnology/addTechnology'
import {Route} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <main>
        <Route exact path='/' component={SearchPanel}/>  
        <Route exact path='/detail/:id' component={Detail}/>
        <Route exact path='/add' component={AddTechnology}/>
      </main>
      </BrowserRouter>
  </Provider>    
    );

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

