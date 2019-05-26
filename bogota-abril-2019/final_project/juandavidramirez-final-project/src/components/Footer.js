import React from "react";
import { Icon } from "antd";
import {
  githubBranchRepository,
  riotGamesDevelopers
} from "../utils/Constants/urls";
import riotGames from "../../public/images/riotGames.png";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer-container">
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
