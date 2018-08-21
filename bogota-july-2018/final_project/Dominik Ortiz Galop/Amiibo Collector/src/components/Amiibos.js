import React from "react";

import Buttons from "../components/Buttons";
const Amiibos = props => {
  let amiibo = props.amiibo;
  return (
    <React.Fragment>
      <article className="amiibo" role="article">
        <h2>{amiibo.name}</h2>
        <img className="amiibo__img" src={amiibo.image} alt="" />

        <div className="amiibo__info" aria-label="Amiibo information">
          <h3>{amiibo.gameSeries}</h3>
          <p>
            <span>Amiibo Series</span>: {amiibo.amiiboSeries}
          </p>
          <p>
            <span>Type:</span> {amiibo.type}
          </p>
          <h4>US Release Dates</h4>
          <p>{amiibo.release.na}</p>
          <div
            className="amiibo__Info__container"
            aria-label="Add amiibo to the amiibo collector"
          >
            <Buttons
              addCol={props.addCol}
              addWish={props.addWish}
              addDel={props.addDel}
              shelf={props.shelf}
            />
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Amiibos;
