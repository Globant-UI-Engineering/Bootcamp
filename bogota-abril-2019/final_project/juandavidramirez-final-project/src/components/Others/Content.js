import React from "react";
import { Router } from "@reach/router";

import Home from "../Home/Home";
import ChampionList from "./ChampionList";
import TopTierList from "./TopTierList";
import Search from "../Search/Search";
import SummonerProfile from "../SummonerProfile/SummonerProfile";
import ChampionDetail from "./ChampionDetail";

const Content = () => {
  return (
    <article>
      <Router>
        <Home exact path="/" />
        <ChampionList path="champions" />
        <TopTierList path="tierList" />
        <Search path="search">
          <SummonerProfile path="summoners/:name" />
        </Search>
        <SummonerProfile path="summoners/:name" />
        <ChampionDetail path="champion/:id" />
      </Router>
    </article>
  );
};

export default Content;
