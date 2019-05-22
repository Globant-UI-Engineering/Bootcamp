import React from "react";

const Summoner = ({ name, leaguePoints, wins, losses }) => {
  return (
    <li className="summoner-container">
      <h4>{name}</h4>
      <p>
        leaguePoints: {leaguePoints}, wins: {wins} losses: {losses}
      </p>
    </li>
  );
};
export default Summoner;
