import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import ChampionList from "./ChampionList/ChampionList";
import ChallengerSummonerList from "../App/ChallengerSummonerList";
import Search from "../App/Search";
import "../Content/Content.css";

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
