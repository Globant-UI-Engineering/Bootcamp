import React from "react";
import Champion from "./Champion";
import { apiStaticUrl } from "../utils/Constants/urls";

const RenderChampionList = ({ champions }) => {
  const apiStaticUrlImg = apiStaticUrl.img + "/champion";
  return (
    <ul className="champions-container">
      {Object.keys(champions).map(key => (
        <li key={key} className="champions-item">
          <Champion
            name={champions[key].name}
            image={`${apiStaticUrlImg}/${champions[key].image.full}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default RenderChampionList;
