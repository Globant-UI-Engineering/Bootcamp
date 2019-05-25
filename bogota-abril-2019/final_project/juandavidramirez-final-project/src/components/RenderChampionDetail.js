import React from "react";
import { Paper } from "@material-ui/core";
import { apiStaticUrl } from "../utils/Constants/urls";
import HashTagList from "./HashTagList";
import InfoCategory from "./InfoCategory";

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
      <article className="champion-detail">
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>
          <span>version </span>
          {version}
        </p>
        <div>
          <div>
            <img alt={`${name} Splash art`} src={championImageUrl} />
            <HashTagList values={tags} />
          </div>
          <div>
            <p>{blurb}</p>
            <div>
              <InfoCategory label="attack" value={info.attack} />
              <InfoCategory label="defense" value={info.defense} />
              <InfoCategory label="magic" value={info.magic} />
              <InfoCategory label="difficulty" value={info.difficulty} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default RenderChampionDetail;
