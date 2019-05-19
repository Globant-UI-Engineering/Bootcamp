import { observable, decorate } from "mobx";

class TenisMatchStore {    
    players = [];
    matches = [];
    points = [];
    isLoadingPlayers = false;
    isLoadingMatches = false;
    isLoadingPoints = false;
    // TODO: Funciones para manejar 
}
decorate(TenisMatchStore,{
  players: observable,
  matches: observable,
  points: observable,
  isLoadingPlayers: observable,
  isLoadingMatches: observable,
  isLoadingPoints: observable,
});

const tenisMatchStore = new TenisMatchStore();

export default tenisMatchStore;