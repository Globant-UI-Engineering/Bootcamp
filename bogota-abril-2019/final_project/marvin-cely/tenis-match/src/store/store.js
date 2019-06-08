import { observable, action, decorate } from "mobx";
import firebaseConfig from '../services/config/firebaseConfig';

const stateService = {
  fromPlayers: false,
  fromTournaments: false,
  fromMatches: false,
  fromPoints: false,
  fromCountries: false,
  fromHandlePlayer: false,
  fromHandleMatch: false,
  fromHandlePoint: false,
}

class Store {
  constructor() {    
    this.fireStore = firebaseConfig.initializeFireBase(); // Get the fireStore instance
  }
  players = [];
  tournaments = [];
  matches = [];
  points = [];
  countries = new Map();  
  playersTable = {
    playersList: [],
    isAscending: true,
    orderType: 'ranking',
    searchValue: '',
  };
  tournamentsTable = {
    tournamentsList: [],
    isAscending: true,
    orderType: 'winner',
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

  obtainTournament(idTournament) {
    return this.tournaments.find(({id}) => id === idTournament);
  }
  
}

decorate(Store,{
  fireStore: observable,
  players: observable.shallow,
  tournaments: observable.shallow,
  matches: observable.shallow,
  points: observable.shallow,
  countries: observable.shallow,
  isLoading: observable,
  isErrorService: observable,
  playersTable: observable.shallow,
  tournamentsTable: observable.shallow,
  playerHandle: observable,
  matchHandle: observable,
  pointHandle: observable,
  currentPointsHistory: observable,
  obtainPlayer: action,
  obtainTournament: action,
});

const store = new Store();
export default store;