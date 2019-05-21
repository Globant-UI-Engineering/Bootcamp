import React from "react";
import "./Search.css";
import { getSummoner } from "../../../utils/api";
import SummonerProfile from "./SummonerProfile/SummonerProfile";

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
        this.setState({ summonerName: "", summonerInfo: response.data });
      },
      onFailed: error => {
        console.log(error);
      }
    };

    if (this.state.summonerName) {
      getSummoner(this.state.summonerName, callback);
    }
  };

  render() {
    const { summonerName, summonerInfo } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="summoner-name-input">summoner name</label>
          <input
            id="summoner-name-input"
            value={summonerName}
            type="text"
            onChange={this.handleChange}
          />

          <button type="submit" />
        </form>

        <div>{summonerInfo && <SummonerProfile info={summonerInfo} />}</div>
      </div>
    );
  }
}

export default Search;
