import React from "react";
import Summoner from "./Summoner/Summoner";
const RenderSummonerList = ({ summoners }) => {
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

export default RenderSummonerList;
