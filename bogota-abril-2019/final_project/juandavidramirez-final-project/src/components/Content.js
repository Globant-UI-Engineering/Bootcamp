import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import ChampionList from "./ChampionList";
import TopTierList from "./TopTierList";
import Search from "./Search";
import SummonerProfile from "./SummonerProfile";

const Content = () => {
  return (
    <article>
      <Router>
        <Home exact path="/" />
        <ChampionList path="/champions" />
        <TopTierList path="/tierList" />
        <Search path="/search" />
        <SummonerProfile path="/summoners/:id" />
      </Router>
    </article>
  );
};

export default Content;
