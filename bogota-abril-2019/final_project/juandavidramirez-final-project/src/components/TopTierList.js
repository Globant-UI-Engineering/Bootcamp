import React from "react";

import RenderTierList from "./RenderTierList";
import Loading from "./Loading";
import { getChallengerLeagueByQueue } from "../utils/api";

class TopTierList extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    var callback = {
      onSuccess: response => {
        this.setState({ summoners: response.data.entries, loading: false });
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
