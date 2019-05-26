import React from "react";
import { LeagueOfLegendsUrl } from "../utils/Constants/urls";
import league from "../../public/images/league.png";
import { description } from "../utils/Constants/game";
import { Button } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <article className="home-container">
        <img alt="League of Legends logo" src={league} />
        <p>{description}</p>
        <Button variant="contained" color="secondary" href={LeagueOfLegendsUrl}>
          More
        </Button>
      </article>
    );
  }
}
export default Home;
