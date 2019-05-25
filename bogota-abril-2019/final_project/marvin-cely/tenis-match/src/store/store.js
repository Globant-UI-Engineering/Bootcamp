import { observable, computed, decorate, toJS } from "mobx";
import firebaseConfig from '../services/config/firebaseConfig';

const stateService = {
  fromPlayers: false,
  fromMatches: false,
  fromPoints: false,
  fromCountries: false,
  fromHandlePlayer: false,
  fromHandleMatch: false,
  fromHandlePoint: false,
}

class Store {
  constructor() {
    // Get the fireStore instance
    this.fireStore = firebaseConfig.initializeFireBase();
  }
  players = [];
  matches = [];
  points = [];
  countries = new Map();
  playerHandle = null;
  matchHandle = null;
  pointHandle = null;
  currentPointsHistory = [];

  isLoading = Object.assign({}, stateService);
  hasErrorService = Object.assign({}, stateService);

  get obtainCountry() {
    return toJS(this.countries);
  }

  // TODO: Revisar en el momento del partido en juego
  addHistoryPoint(point) {
    this.pointsHistory.unshift(point);
  }

  removeHistoryPoint() {
    if(this.pointsHistory.length>0)
      this.pointsHistory.shift();
  }

  get allPointsHistory() {
    return this.pointsHistory;
  }
}

decorate(Store,{
  fireStore: observable,
  players: observable.shallow,
  matches: observable.shallow,
  points: observable.shallow,
  countries: observable.shallow,
  isLoading: observable,
  isErrorService: observable,
  playerHandle: observable,
  matchHandle: observable,
  pointHandle: observable,
  currentPointsHistory: observable,
  allPointsHistory: computed,
  obtainCountry: computed,
});

const store = new Store();
export default store;