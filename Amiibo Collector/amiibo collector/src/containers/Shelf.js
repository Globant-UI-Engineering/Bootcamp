import React from "react";
import Amiibos from "../components/Amiibos";

const Shelf = props => {
  let filteredAmiibos = props.amiibos;

  const filterAmiibo = (amiibos, shelf) =>
    amiibos.filter(amiibo => amiibo.shelf === shelf);

  switch (props.shelf) {
    case "MissingAmiibo":
      filteredAmiibos = filterAmiibo(props.amiibos, props.shelf);
      break;
    case "Collection":
      filteredAmiibos = filterAmiibo(props.amiibos, props.shelf);
      break;
    case "WishList":
      filteredAmiibos = filterAmiibo(props.amiibos, props.shelf);
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      {filteredAmiibos.map(amiibo => (
        <Amiibos
          amiibo={amiibo}
          key={amiibo.tail}
          shelf={props.shelf}
          addCol={() => props.addCol(amiibo.tail)}
          addDel={() => props.addDel(amiibo.tail)}
          addWish={() => props.addWish(amiibo.tail)}
        />
      ))}
    </React.Fragment>
  );
};

export default Shelf;
