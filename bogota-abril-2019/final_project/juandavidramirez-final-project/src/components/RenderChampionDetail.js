import React from "react";
import { Paper } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";

class RenderChampionDetail extends React.Component {
  render() {
    const {
      id,
      numberKey,
      name,
      title,
      blurb,
      info,
      image,
      tags,
      partype,
      stats,
      version
    } = this.props;

    console.log(version);
    const championImageUrl =
      apiStaticUrl.noVersionImg + "/champion/loading/" + id + "_0.jpg";
    return (
      <Paper className="champion-detail-paper-flex-container">
        <h2>{name}</h2>
        <p>{title}</p>
        <br />
        <img alt={`${name} Splash art`} src={championImageUrl} />
        <p>{blurb}</p>
        <br />
        <p>
          attack: {info.attack}, defense: {info.defense}, magic: {info.magic},
          difficulty:{info.difficulty}
        </p>
        <br />
        <p>hashtags: {tags}</p>
      </Paper>
    );
  }
}

export default RenderChampionDetail;
