import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import ChampionList from "./ChampionList";
import Search from "./Search";
import TopTierList from "./TopTierList";

const Content = () => {
  return (
    <article>
      <Router>
        <Home exact path="/" />
        <ChampionList path="/champions" />
        <TopTierList path="/tierList" />
        <Search path="/search" />
      </Router>
    </article>
  );
};

export default Content;
