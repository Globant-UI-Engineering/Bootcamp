import { createStore } from "redux";
import appReducer from "./reducers";

export const store = createStore(appReducer);
