import { observable, action, decorate } from "mobx";
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
  playersTable = {
    playersList: [],
    orderType: 'ranking',
    searchValue: '',
  };
  matchHandle = null;
  pointHandle = null;
  currentPointsHistory = [];

  isLoading = Object.assign({}, stateService);
  hasErrorService = Object.assign({}, stateService);

  obtainPlayer(idPlayer) {
    return this.players.find(({id}) => id === idPlayer);
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
  playersTable: observable.shallow,
  playerHandle: observable,
  matchHandle: observable,
  pointHandle: observable,
  currentPointsHistory: observable,
  obtainPlayer: action,
});

const store = new Store();
export default store;