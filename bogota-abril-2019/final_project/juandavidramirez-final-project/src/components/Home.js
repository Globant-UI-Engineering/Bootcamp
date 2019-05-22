import React from "react";
import { LeagueOfLegendsUrl } from "../utils/Constants/urls";

class Home extends React.Component {
  render() {
    return (
      <p>
        The main goal of this app is to deliver all kind of information about{" "}
        <a href={LeagueOfLegendsUrl}>league of legends</a>
      </p>
    );
  }
}
export default Home;
