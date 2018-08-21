import React from "react";
import { Link } from "react-router-dom";

const NoAmiibos = props => (
  <React.Fragment>
    <div className="initialPage">
      <h1>Welcome to Amiibo Collector</h1>
      <p>
        Keep a list of your amiibo collection and wishlist, and take a look of
        all the available amiibos
      </p>
      <p>Amiibo Collector let's you:</p>
      <ul>
        <li>Add amiibos to your collection</li>
        <li>Add amiibos to your Wishlist</li>
        <li>See all the available amiibos</li>
      </ul>
      <Link to="/shelf">Add a new Amiibo</Link>
    </div>
  </React.Fragment>
);

export default NoAmiibos;
