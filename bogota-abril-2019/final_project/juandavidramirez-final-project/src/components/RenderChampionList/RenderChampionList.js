import React from "react";
import animate from "@jam3/gsap-promise";

import Champion from "../Others/Champion";
import { apiStaticUrl } from "../../utils/Constants/urls";

import "./RenderChampionList.css";

const apiStaticUrlImg = apiStaticUrl.img + "/champion";

class RenderChampionList extends React.Component {
  componentDidMount() {
    animate.from(this.h2, 0.2, { y: -200, delay: 0.4 });
    animate.from(this.championList, 0.4, { y: 1000, delay: 0.4 });
  }

  getChampionList = () => {
    const { champions } = this.props;
    var championList = Object.keys(champions).map(key => (
      <li key={key} className="champions-item" aria-label={champions[key].name}>
        <Champion
          name={champions[key].name}
          image={`${apiStaticUrlImg}/${champions[key].image.full}`}
          nameKey={champions[key].id}
        />
      </li>
    ));
    return championList;
  };

  render() {
    return (
      <section className="page-wrapper">
        <h2 ref={el => (this.h2 = el)} aria-label="Champions">
          champions
        </h2>
        <ul
          aria-label="List of champions"
          ref={ul => (this.championList = ul)}
          className="champions-container"
        >
          {this.getChampionList()}
        </ul>
      </section>
    );
  }
}

export default RenderChampionList;
