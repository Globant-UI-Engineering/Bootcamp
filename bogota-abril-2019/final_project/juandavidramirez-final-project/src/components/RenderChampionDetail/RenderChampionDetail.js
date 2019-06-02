import React from "react";
import animate from "@jam3/gsap-promise";

import { apiStaticUrl } from "../../utils/Constants/urls";
import HashTagList from "../Others/HashTagList";
import InfoCategory from "../Others/InfoCategory";

import "./RenderChampionDetail.css";

class RenderChampionDetail extends React.Component {
  componentDidMount() {
    animate.from(this.h2, 0.2, { y: -200, delay: 0.4 });
    animate.from(this.h3, 0.2, { y: -200, delay: 0.4 });
    animate.from(this.p, 0.2, { y: -250, delay: 0.4 });
    animate.from(this.imgContainer, 0.2, { x: -1000, delay: 0.2 });
    animate.from(this.blurb, 0.5, { x: -1180, delay: 0.3 });
  }
  render() {
    const { id, name, title, blurb, info, tags, version } = this.props;

    const championImageUrl =
      apiStaticUrl.noVersionImg + "/champion/loading/" + id + "_0.jpg";
    return (
      <article className="champion-detail">
        <h2 ref={h2 => (this.h2 = h2)}>{name}</h2>
        <h3 ref={h3 => (this.h3 = h3)}>{title}</h3>
        <p ref={p => (this.p = p)}>
          <span>version </span>
          {version}
        </p>
        <div ref={container => (this.container = container)}>
          <div
            ref={imgContainer => {
              this.imgContainer = imgContainer;
            }}
          >
            <img alt={`${name} Splash art`} src={championImageUrl} />
            <HashTagList values={tags} />
          </div>
          <div aria-label="Additional info">
            <p ref={p => (this.blurb = p)}>{blurb}</p>
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
