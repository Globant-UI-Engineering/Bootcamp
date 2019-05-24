import React from "react";
import { getSummoner } from "../utils/api";
import SummonerProfile from "./SummonerProfile";
import search from "../../public/images/search.png";
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

class Search extends React.Component {
  state = {
    summonerName: ""
  };

  handleChange = event => {
    this.setState({ summonerName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //this.setState({ summonerName: "" });
  };

  render() {
    const { summonerName } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        <Paper className="search-section-container">
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
