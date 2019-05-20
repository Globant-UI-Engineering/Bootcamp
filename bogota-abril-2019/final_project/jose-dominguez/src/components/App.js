import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from './IndexPage/IndexPage';
import RegisterPage from './RegisterPage/RegisterPage';
import ArticlePage from './ArticlePage/ArticlePage';
import MePage from './MePage/MePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/me" component={MePage} />
                <Route path="/articles" component={ArticlePage} />
                <Route path="/register" component={RegisterPage} />
                <Route component={IndexPage} />
            </Switch>
        </Router>
    );
}

export default App;
