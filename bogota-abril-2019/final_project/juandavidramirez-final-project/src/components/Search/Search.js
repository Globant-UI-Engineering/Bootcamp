/* eslint-disable react/no-find-dom-node */
import React from "react";
import animate from "@jam3/gsap-promise";
import { Button, Paper, InputBase } from "@material-ui/core";
import { Link, navigate } from "@reach/router";
import { findDOMNode } from "react-dom";

import search from "../../../public/images/search.svg";

import "./Search.css";

class Search extends React.Component {
  state = {
    summonerName: ""
  };

  handleChange = event => {
    this.setState({ summonerName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleEnterKey = event => {
    if (event.key === "Enter") {
      navigate("/search/summoners/" + this.state.summonerName);
    }
  };

  componentDidMount() {
    animate.from(this.container, 0.2, { y: -200, delay: 0.4 });
  }

  render() {
    const { summonerName } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        <Paper
          className="search-section-container"
          ref={container => (this.container = findDOMNode(container))}
          aria-label="Search a summoner name"
        >
          <InputBase
            id="search-summoner-input"
            value={summonerName}
            onChange={this.handleChange}
            placeholder="Summoner name..."
            aria-describedby="Search a summoner name"
            onKeyDown={this.handleEnterKey}
          />
          <Button onClick={this.handleSubmit}>
            <Link to={`summoners/${summonerName}`}>
              <img src={search} alt="icon button" />
            </Link>
          </Button>
        </Paper>
        {children}
      </React.Fragment>
    );
  }
}

export default Search;
