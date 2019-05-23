import React from "react";

import RenderTierList from "./RenderTierList";
import Loading from "./Loading";
import { getChallengerLeagueByQueue } from "../utils/api";

class TopTierList extends React.Component {
  state = {
    loading: true
  };

  orderByLeaguePoints = summoners => {
    var summonersSortedList = [...summoners];

    summonersSortedList.sort((a, b) => {
      return b.leaguePoints - a.leaguePoints;
    });

    summonersSortedList = summonersSortedList.map((summoner, index) => {
      summoner.rankNumber = index + 1;
      return summoner;
    });

    this.setState({ summoners: summonersSortedList, loading: false });
  };

  componentDidMount() {
    var callback = {
      onSuccess: response => {
        this.orderByLeaguePoints(response.data.entries);
      },
      onFailed: error => {
        console.error(error);
      }
    };

    getChallengerLeagueByQueue("RANKED_SOLO_5x5", callback);
  }

  render() {
    const { summoners, loading } = this.state;
    return loading ? (
      <Loading name="Top Tier Summoners" />
    ) : (
      <RenderTierList summoners={summoners} />
    );
  }
}

export default TopTierList;
