import React from "react";
import { Icon } from "antd";
import animate from "@jam3/gsap-promise";

import "./Footer.css";

import {
  githubBranchRepository,
  riotGamesDevelopers
} from "../../utils/Constants/urls";
import riotGames from "../../../public/images/riotGames.png";

class Footer extends React.Component {
  componentDidMount() {
    animate.from(this.footer, 0.6, { y: 1000, delay: 0.4 });
  }
  render() {
    return (
      <footer className="footer-container" ref={f => (this.footer = f)}>
        <nav>
          <h3 aria-label="League of legends master">lol master</h3>
          <ul>
            <li>
              <a
                aria-label="Github repository link"
                href={githubBranchRepository}
              >
                <Icon type="github" theme="outlined" />
              </a>
            </li>
            <li>
              <a href={riotGamesDevelopers}>
                <img alt="Riot games developers portal" src={riotGames} />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
