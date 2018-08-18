import React from "react";
import NoAmiibos from "./NoAmiibos";
import Shelf from "../containers/Shelf";

const InitialPage = props => {
  let initialPage = "";
  props.NoAmiibos ? (initialPage = <Shelf />) : (initialPage = <NoAmiibos />);
  return initialPage;
};

export default InitialPage;
