import React from "react";
import Champion from "./Champion/Champion";
import "./RenderChampionList.css";

const RenderChampionList = ({ champions }) => {
  const apiStaticUrlImg =
    "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion";
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
