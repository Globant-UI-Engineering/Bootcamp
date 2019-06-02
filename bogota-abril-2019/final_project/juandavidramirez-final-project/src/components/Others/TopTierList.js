import React from "react";

import RenderTierList from "../RenderTierList/RenderTierList";
import Loading from "../Loading/Loading";
import { getChallengerLeagueByQueue } from "../../utils/api";
import ErrorPanel from "../ErrorPanel/ErrorPanel";

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
        this.setState({ error: error.response });
      }
    };

    getChallengerLeagueByQueue("RANKED_SOLO_5x5", callback);
  }

  render() {
    const { summoners, loading, error } = this.state;

    return error ? (
      <ErrorPanel error={error} />
    ) : loading ? (
      <Loading name="top tier summoners" />
    ) : (
      <RenderTierList summoners={summoners} />
    );
  }
}

export default TopTierList;
