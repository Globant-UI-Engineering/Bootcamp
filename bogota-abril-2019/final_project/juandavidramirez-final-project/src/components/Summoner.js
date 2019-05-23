import React from "react";
import WinPercentage from "./WinPercentage";
import Veteran from "./Veteran";
import HotStreak from "./HotStreak";
import FreshBlood from "./FreshBlood";

const Summoner = ({
  rankNumber,
  name,
  wins,
  losses,
  hotStreak,
  veteran,
  freshBlood,
  leaguePoints
}) => {
  return (
    <tr>
      <td>{rankNumber}</td>
      <td>{name}</td>
      <td>
        <WinPercentage wins={wins} losses={losses} />
      </td>
      <td>{hotStreak && <HotStreak />}</td>
      <td>{veteran && <Veteran />}</td>
      <td>{freshBlood && <FreshBlood />}</td>
      <td>{leaguePoints}</td>
    </tr>
  );
};
export default Summoner;
