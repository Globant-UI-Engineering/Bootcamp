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
import { redirectTo } from "@reach/router";
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

    if (this.state.summonerName) {
      navigate("/summoners/" + this.state.summonerName);
    }
  };

  render() {
    const { summonerName } = this.state;
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
            <img src={search} alt="icon button" />
          </Button>
        </Paper>
        <section>
          {summonerName && <SummonerProfile name={summonerName} />}
        </section>
      </React.Fragment>
    );
  }
}

export default Search;
