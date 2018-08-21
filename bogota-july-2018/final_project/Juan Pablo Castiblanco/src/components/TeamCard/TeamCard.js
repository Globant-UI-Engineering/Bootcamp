import React, { Component } from "react";

import firebase from "firebase/app";
import { DB_CONFIG } from "../../config/config";
import "firebase/storage";

import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  Col,
  Button
} from "reactstrap";

class TeamCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamLogoURL: "",
      buttonColumnSpacing: 2
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG);
    }
    this.firebaseStorage = firebase.storage();
    this.firebaseDatabase = firebase.database();

    this.team = this.props.value;

    this.deleteTeam = this.deleteTeam.bind(this);

    this.firebaseTeamReference = this.firebaseDatabase.ref(
      "teams/" + this.team.teamKey
    );
    this.firebaseLogoReference = this.firebaseStorage.ref(
      "teamLogos/" + this.team.teamKey
    );
  }

  componentDidMount() {
    this.firebaseLogoReference
      .getDownloadURL()
      .then(url => this.setState({ teamLogoURL: url }));
  }

  deleteTeam() {
    this.firebaseTeamReference.remove();
    this.firebaseLogoReference.delete();
  }

  render() {
    return (
      <Col md="2">
        <Card>
          <CardHeader> {this.team.teamShortName} </CardHeader>
          <CardImg
            width="100%"
            src={this.state.teamLogoURL}
            alt={this.team.teamShortName + " logo"}
          />
          <CardBody>
            <CardSubtitle id="team-fullName">Team full name</CardSubtitle>
            <CardText aria-labelledby="team-fullName">
              {this.team.teamFullName}
            </CardText>
            <CardSubtitle id="team-ground">Team ground</CardSubtitle>
            <CardText aria-labelledby="team-ground">
              {this.team.teamGround}
            </CardText>
            <CardSubtitle id="team-location">Team location</CardSubtitle>
            <CardText aria-labelledby="team-location">
              {this.team.teamLocation}
            </CardText>
            <Button color="danger" onClick={this.deleteTeam}>
              Delete
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default TeamCard;
