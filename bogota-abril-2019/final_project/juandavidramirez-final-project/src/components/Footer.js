import React from "react";
import { Icon } from "antd";
import animate from "@jam3/gsap-promise";

import {
  githubBranchRepository,
  riotGamesDevelopers
} from "../utils/Constants/urls";
import riotGames from "../../public/images/riotGames.png";

class Footer extends React.Component {
  componentDidMount() {
    animate.from(this.footer, 0.6, { y: 1000, delay: 0.4 });
  }
  render() {
    return (
      <footer className="footer-container" ref={f => (this.footer = f)}>
        <div>
          <h3>lol master</h3>
          <li>
            <a href={githubBranchRepository}>
              <Icon type="github" theme="outlined" />
            </a>
            <a href={riotGamesDevelopers}>
              <img alt="Riot games developers portal" src={riotGames} />
            </a>
          </li>
        </div>
      </footer>
    );
  }
}

export default Footer;
