import React from "react";

import Summoner from "./Summoner";
const RenderTopTierList = ({ summoners }) => {
  return (
    <ul className="summoners-list">
      {summoners.map((value, index) => {
        return (
          <Summoner
            key={index}
            name={value.summonerName}
            leaguePoints={value.leaguePoints}
            wins={value.wins}
            losses={value.losses}
          />
        );
      })}
    </ul>
  );
};

export default RenderTopTierList;
