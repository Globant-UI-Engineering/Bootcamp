import React, { Component } from "react";

import firebase from "firebase/app";
import { DB_CONFIG } from "../../config/config";
import "firebase/database";

import TeamCard from "../TeamCard/TeamCard";

import { CardDeck } from "reactstrap";

import { connect } from "react-redux";
import { setActiveTab } from "../../actions";

class ViewTeams extends Component {
  constructor() {
    super();

    this.state = {
      teams: []
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG);
    }
    this.firebaseDatabase = firebase.database();
  }

  componentDidMount() {
    let teamsDatabaseReference = this.firebaseDatabase.ref('teams');
    teamsDatabaseReference.on('value', (snapshot) => {
        let firebaseTeams = snapshot.val();
        let teams = [];
        for(let team in firebaseTeams){
            teams.push({
                teamKey: team,
                teamFullName: firebaseTeams[team].teamFullName,
                teamShortName: firebaseTeams[team].teamShortName,
                teamGround: firebaseTeams[team].teamGround,
                teamLocation: firebaseTeams[team].teamLocation,
            });
        }
        this.setState({ teams: teams });
    });
  }
  render() {
    if(this.props.activateTab !== "1"){
      this.props.activateTab("1");
    }

    const teams = this.state.teams;
    const teamCards = teams.map(team =>{
        return(
            <TeamCard key={team.teamKey} value={team} />
        );
    });

    return(
        <CardDeck>{teamCards}</CardDeck>
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
    activateTab: tabNumber => {
      dispatch(setActiveTab(tabNumber));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewTeams);

