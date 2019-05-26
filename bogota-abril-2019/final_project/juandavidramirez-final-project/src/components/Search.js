import React from "react";
import { getSummoner } from "../utils/api";
import SummonerProfile from "./SummonerProfile";
import search from "../../public/images/search.svg";
import animate from "@jam3/gsap-promise";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  SearchIcon,
  CssBaseline,
  Paper,
  InputBase,
  IconButton
} from "@material-ui/core";
import { redirectTo, Router, Link } from "@reach/router";
import { navigate } from "@reach/router/lib/history";
import { findDOMNode } from "react-dom";

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

  componentDidMount() {
    animate.from(this.container, 0.2, { y: -200, delay: 0.8 });
  }

  render() {
    const { summonerName } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        <Paper
          className="search-section-container"
          ref={container => (this.container = findDOMNode(container))}
        >
          <InputBase
            id="search-summoner-input"
            value={summonerName}
            onChange={this.handleChange}
            placeholder="Summoner name..."
            aria-describedby="Search a summoner name"
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
