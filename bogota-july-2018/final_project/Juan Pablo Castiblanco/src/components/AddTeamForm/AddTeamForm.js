import React, { Component } from "react";

import './AddTeamForm.css';

import firebase from "firebase/app";
import { DB_CONFIG } from "../../config/config";
import "firebase/database";
import "firebase/storage";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
  Col
} from "reactstrap";

import { connect } from "react-redux";
import { setActiveTab } from "../../actions";

class AddTeamForm extends Component {
  constructor() {
    super();

    this.state = {
      teamKey: "",
      teamFullName: "",
      teamShortName: "",
      teamGround: "",
      teamLocation: "",
      teamLogoFile: null,

      alertVisible: false,
      columnsSpacing: 8,
      labelSpacing: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.onDismiss = this.onDismiss.bind(this);

    if (!firebase.apps.length) {
      firebase.initializeApp(DB_CONFIG);
    }
    this.firebaseDatabase = firebase.database();
    this.firebaseStorage = firebase.storage();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFileChange(e) {
    this.setState({
      teamLogoFile: e.target.files[0]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const teamsReference = this.firebaseDatabase.ref("teams");
    const team = {
      teamFullName: this.state.teamFullName,
      teamShortName: this.state.teamShortName,
      teamGround: this.state.teamGround,
      teamLocation: this.state.teamLocation
    };
    const newTeamKey = teamsReference.push(team).key;

    const firebaseLogoReference = this.firebaseStorage.ref(
      "teamLogos/" + newTeamKey
    );
    firebaseLogoReference.put(this.state.teamLogoFile);

    this.setState({
      teamKey: "",
      teamFullName: "",
      teamShortName: "",
      teamGround: "",
      teamLocation: "",
      teamLogoFile: null,

      alertVisible: true
    });
  }

  onDismiss() {
    this.setState({
      alertVisible: false
    });
  }

  render() {

    if(this.props.activateTab !== "2"){
      this.props.activateTab("2");
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Alert
          color="success"
          isOpen={this.state.alertVisible}
          toggle={this.onDismiss}
        >
          You added a team!
        </Alert>
        <FormGroup row>
          <Label className="label-text" for="team-fullname" sm={this.state.labelSpacing}>
            Team full name
          </Label>
          <Col md={this.state.columnsSpacing}>
            <Input
              type="text"
              name="teamFullName"
              id="team-fullname"
              placeholder="The team full name"
              onChange={this.handleChange}
              value={this.state.teamFullName}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="label-text" for="team-shortname" sm={this.state.labelSpacing}>
            Team short name
          </Label>
          <Col md={this.state.columnsSpacing}>
            <Input
              type="text"
              name="teamShortName"
              id="team-shortname"
              placeholder="The team short name"
              onChange={this.handleChange}
              value={this.state.teamShortName}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="label-text" for="team-ground" sm={this.state.labelSpacing}>
            Team ground
          </Label>
          <Col md={this.state.columnsSpacing}>
            <Input
              type="text"
              name="teamGround"
              id="team-ground"
              placeholder="The team ground/stadium name"
              onChange={this.handleChange}
              value={this.state.teamGround}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="label-text" for="team-location" sm={this.state.labelSpacing}>
            Team location
          </Label>
          <Col md={this.state.columnsSpacing}>
            <Input
              type="text"
              name="teamLocation"
              id="team-location"
              placeholder="Where the team is based in"
              onChange={this.handleChange}
              value={this.state.teamLocation}
              required
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            className="label-text"
            for="team-logo"
            id="teamLogo-label"
            sm={this.state.labelSpacing}
          >
            Team logo
          </Label>
          <Col md={this.state.columnsSpacing}>
            <Input
              type="file"
              name="teamLogoFile"
              id="team-logo"
              aria-labelledby="teamLogo-label teamLogo-description"
              accept="image/*"
              onChange={this.handleFileChange}
              required
            />

            <FormText id="teamLogo-description" color="muted">
              Upload a image file of the team logo.
            </FormText>
          </Col>
        </FormGroup>
        <div className="button-wrapper">
          <Button color="success">Create team</Button>
        </div>
      </Form>
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
)(AddTeamForm);
