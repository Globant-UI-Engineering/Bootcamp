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

class Search extends React.Component {
  state = {
    summonerName: ""
  };

  handleChange = event => {
    this.setState({ summonerName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    var callback = {
      onSuccess: response => {
        this.setState({ summonerName: "", info: response.data });
      },
      onFailed: error => {
        console.error(error);
      }
    };

    if (this.state.summonerName) {
      getSummoner(this.state.summonerName, callback);
    }
  };

  render() {
    const { summonerName, info } = this.state;
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
          {info && (
            <SummonerProfile
              id={info.id}
              accountId={info.accountId}
              puuid={info.puuid}
              name={info.name}
              profileIconId={info.profileIconId}
              summonerLevel={info.summonerLevel}
              revisionDate={info.revisionDate}
            />
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default Search;
