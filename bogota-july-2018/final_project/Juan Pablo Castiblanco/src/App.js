import React, { Component } from "react";
import logo from "./LigaAguilaLogo.svg";
import "./App.css";
import AddTeamForm from "./components/AddTeamForm/AddTeamForm";
import ViewTeams from "./components/ViewTeams/ViewTeams";

import { Nav, NavItem, NavLink } from "reactstrap";

import classnames from "classnames";

import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };

    this.toggleTabs = this.toggleTabs.bind(this);
  }

  toggleTabs(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-leagueLogo" alt="logo" />
          <h1 className="App-title">My Football League</h1>
        </header>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggleTabs('1');
              }}
              href="/viewTeams"
            >
              View Teams
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggleTabs('2');
              }}
              href="/addNewTeam"
            >
              Add New Team
            </NavLink>
          </NavItem>
        </Nav>
        <div>
          <Route exact path="/" component={ViewTeams} />
          <Route path="/viewTeams" component={ViewTeams} />
          <Route path="/addNewTeam" component={AddTeamForm} />
        </div>
      </div>
    );
  }
}

export default App;
