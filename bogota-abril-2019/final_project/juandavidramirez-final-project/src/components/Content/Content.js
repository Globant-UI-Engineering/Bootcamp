import React from "react";
import { Router } from "@reach/router";
import Home from "./Home/Home";
import ChampionList from "./ChampionList/ChampionList";
import ChallengerSummonerList from "../App/ChallengerSummonerList";
import Search from "../App/Search";
import "../Content/Content.css";

const Content = () => {
  return (
    <article>
      <Router>
        <Home exact path="/" />
        <ChampionList path="/champions" />
        <ChallengerSummonerList path="/tierList" />
        <Search path="/search" />
      </Router>
    </article>
  );
};

export default Content;
