import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import ChampionList from "./ChampionList";
import ChallengerSummonerList from "./ChallengerSummonerList";
import Search from "./Search";

class Content extends React.Component {
  render() {
    return (
      <article>
        <Route exact path="/" component={Home} />
        <Route path="/champions" component={ChampionList} />
        <Route path="/tierList" component={ChallengerSummonerList} />
        <Route path="/search" component={Search} />
      </article>
    );
  }
}
export default Content;
