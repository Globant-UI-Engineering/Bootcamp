import React from "react";
import WinPercentage from "./WinPercentage";
import Veteran from "./Veteran";
import HotStreak from "./HotStreak";
import FreshBlood from "./FreshBlood";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { navigate } from "@reach/router";

class Summoner extends React.Component {
  handleClick = (event, name) => {
    navigate("/summoners/" + name);
  };

  render() {
    const {
      summonerId,
      rankNumber,
      name,
      wins,
      losses,
      hotStreak,
      veteran,
      freshBlood,
      leaguePoints
    } = this.props;

    return (
      <TableRow hover onClick={event => this.handleClick(event, name)}>
        <TableCell component="th" scope="row">
          {rankNumber}
        </TableCell>
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">
          <WinPercentage wins={wins} losses={losses} />
        </TableCell>
        <TableCell align="center">{hotStreak && <HotStreak />}</TableCell>
        <TableCell align="center">{veteran && <Veteran />}</TableCell>
        <TableCell align="center">{freshBlood && <FreshBlood />}</TableCell>
        <TableCell align="right">{leaguePoints}</TableCell>
      </TableRow>
    );
  }
}

export default Summoner;
