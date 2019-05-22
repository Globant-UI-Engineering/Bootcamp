import React from "react";

const Summoner = ({ name, leaguePoints, wins, losses }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{wins}</td>
      <td>{losses}</td>
      <td>{leaguePoints}</td>
    </tr>
  );
};
export default Summoner;
