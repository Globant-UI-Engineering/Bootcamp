import React from "react";
import animate from "@jam3/gsap-promise";
import { Button } from "@material-ui/core";

import { LeagueOfLegendsUrl } from "../../utils/Constants/urls";
import league from "../../../public/images/league.png";
import { description } from "../../utils/Constants/game";

import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    animate.from(this.img, 0.1, { y: -300, delay: 0.4 });
    animate.from(this.p, 0.5, { x: 1050, delay: 0.2 });
  }
  render() {
    return (
      <article className="home-container">
        <img
          alt="League of Legends"
          src={league}
          ref={img => (this.img = img)}
        />
        <p ref={p => (this.p = p)}>{description}</p>
        <Button variant="contained" color="secondary" href={LeagueOfLegendsUrl}>
          More
        </Button>
      </article>
    );
  }
}
export default Home;
