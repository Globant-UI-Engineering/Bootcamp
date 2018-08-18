import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility.js";

const initialState = {
  allAmiibos: [],
  gameSeries: "",
  amiiboSeries: "",
  character: ""
};

const updateAmiibo = (state, action, shelf) => {
  const findAmiibo = state.allAmiibos.map(amiibo => {
    if (amiibo.tail === action.key) {
      return updateObject({ ...amiibo, shelf: shelf });
    } else {
      return amiibo;
    }
  });
  return updateObject(state, { allAmiibos: findAmiibo });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_AMIIBOS:
      return updateObject(state, {
        allAmiibos: action.amiibos
      });
    case actionTypes.ADD_TO_COLLECTION:
      return updateAmiibo(state, action, "Collection");
    case actionTypes.ADD_TO_WISH_LIST:
      return updateAmiibo(state, action, "WishList");
    case actionTypes.DELETE_AMIIBO:
      return updateAmiibo(state, action, "MissingAmiibo");
    case actionTypes.SEARCH_PARAMS:
      return {
        ...state,
        gameSeries: action.gameSeries,
        amiiboSeries: action.amiiboSeries,
        character: action.character
      };
    default:
      return state;
  }
};

export default reducer;
