import React from "react";
import { LeagueOfLegendsUrl } from "../utils/Constants/urls";
import league from "../../public/images/league.png";
import { description } from "../utils/Constants/game";
import { Button } from "@material-ui/core";
import animate from "@jam3/gsap-promise";

class Home extends React.Component {
  componentDidMount() {
    animate.from(this.img, 0.2, { y: -300, delay: 0.8 });
    animate.from(this.p, 0.2, { x: 1100, delay: 0.8 });
  }
  render() {
    return (
      <article className="home-container">
        <img
          alt="League of Legends logo"
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
