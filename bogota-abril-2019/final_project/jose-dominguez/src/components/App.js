import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from './Pages/IndexPage';
import RegisterPage from './Pages/RegisterPage';
import ArticlePage from './Pages/ArticlePage';
import MePage from './Pages/MePage';
import SettingsPage from './Pages/SettingsPage';
import CataloguePage from './Pages/CataloguePage';
import ClientPage from './Pages/ClientPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/me" component={MePage} />
                <Route path="/articles" component={ArticlePage} />
                <Route path="/client" component={ClientPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/settings" component={SettingsPage} />
                <Route path="/catalogue" component={CataloguePage} />
                <Route component={IndexPage} />
            </Switch>
        </Router>
    );
}

export default App;
