import React from "react";
import Champion from "./Champion";
import { apiStaticUrl } from "../utils/Constants/urls";

const RenderChampionList = ({ champions }) => {
  const apiStaticUrlImg = apiStaticUrl.img + "/champion";
  return (
    <ul className="champions-container">
      {Object.keys(champions).map(key => (
        <Champion
          key={key}
          name={key}
          image={`${apiStaticUrlImg}/${champions[key].image.full}`}
        />
      ))}
    </ul>
  );
};

export default RenderChampionList;
