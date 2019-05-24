import { observable, computed, decorate } from "mobx";
import firebaseConfig from '../services/config/firebaseConfig';

const stateService = {
  fromPlayers: false,
  fromMatches: false,
  fromPoints: false,
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
  playerHandle = null;
  matchHandle = null;
  pointHandle = null;
  currentPointsHistory = [];

  isLoading = Object.assign({}, stateService);
  hasErrorService = Object.assign({}, stateService);

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
  players: observable,
  matches: observable,
  points: observable,
  isLoading: observable,
  isErrorService: observable,
  playerHandle: observable,
  matchHandle: observable,
  pointHandle: observable,
  currentPointsHistory: observable,
  allPointsHistory: computed,
});

const store = new Store();
export default store;