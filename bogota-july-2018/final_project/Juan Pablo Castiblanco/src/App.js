import React, { Component } from "react";
import logo from "./LigaAguilaLogo.svg";
import "./App.css";
import AddTeamForm from "./components/AddTeamForm/AddTeamForm";
import ViewTeams from "./components/ViewTeams/ViewTeams";

import { Nav, NavItem } from "reactstrap";

import { Route, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { setActiveTab } from "./actions";

class App extends Component {
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
              className={
                this.props.activeTab === "1" ? "ActiveNavLink" : "NavLink"
              }
              onClick={() => {
                this.props.onTabClick("1");
              }}
              to="/viewTeams"
            >
              View Teams
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={
                this.props.activeTab === "2" ? "ActiveNavLink" : "NavLink"
              }
              onClick={() => {
                this.props.onTabClick("2");
              }}
              to="/addNewTeam"
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

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTabClick: tabNumber => {
      dispatch(setActiveTab(tabNumber));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
