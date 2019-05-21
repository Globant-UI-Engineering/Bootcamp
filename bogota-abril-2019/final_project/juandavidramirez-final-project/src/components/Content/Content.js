import React from "react";
import { Router } from "@reach/router";
import Home from "./Home/Home";
import ChampionList from "./ChampionList/ChampionList";
import Search from "./Search/Search";
import "../Content/Content.css";
import TopTierList from "./TopTierList/TopTierList";

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
