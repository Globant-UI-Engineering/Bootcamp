import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from './Pages/IndexPage/IndexPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import ArticlePage from './Pages/ArticlePage/ArticlePage';
import MePage from './Pages/MePage/MePage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import CommunityPage from './Pages/CommunityPage/CommunityPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/me" component={MePage} />
                <Route path="/articles" component={ArticlePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/settings" component={SettingsPage} />
                <Route path="/community" component={CommunityPage} />
                <Route component={IndexPage} />
            </Switch>
        </Router>
    );
}

export default App;
