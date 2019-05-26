import React from "react";
import Champion from "./Champion";
import { apiStaticUrl } from "../utils/Constants/urls";
import animate from "@jam3/gsap-promise";

class RenderChampionList extends React.Component {
  componentDidMount() {
    animate.from(this.h2, 0.2, { y: -200, delay: 0.1 });
    animate.from(this.championList, 0.2, { x: -1300, delay: 0.8 });
  }

  render() {
    const { champions } = this.props;
    const apiStaticUrlImg = apiStaticUrl.img + "/champion";
    return (
      <div className="page-wrapper">
        <h2 ref={el => (this.h2 = el)}>champions</h2>
        <ul
          ref={ul => (this.championList = ul)}
          className="champions-container"
        >
          {Object.keys(champions).map(key => (
            <li key={key} className="champions-item">
              <Champion
                name={champions[key].name}
                image={`${apiStaticUrlImg}/${champions[key].image.full}`}
                nameKey={champions[key].id}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RenderChampionList;
