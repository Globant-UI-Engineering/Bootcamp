import * as actionTypes from "./actionTypes";

export const addToCollection = key => {
  return {
    type: actionTypes.ADD_TO_COLLECTION,
    key: key
  };
};

export const addToWishList = key => {
  return {
    type: actionTypes.ADD_TO_WISH_LIST,
    key: key
  };
};

export const allAmiibos = amiibos => {
  return {
    type: actionTypes.ALL_AMIIBOS,
    amiibos: amiibos
  };
};

export const deleteAmiibo = key => {
  return {
    type: actionTypes.DELETE_AMIIBO,
    key: key
  };
};

export const searchParams = (amiiboSeries, character, gameSeries) => {
  return {
    type: actionTypes.SEARCH_PARAMS,
    amiiboSeries: amiiboSeries,
    character: character,
    gameSeries: gameSeries
  };
};
