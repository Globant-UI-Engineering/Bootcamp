import { observable, computed, decorate } from "mobx";

class TenisMatchStore {   
    players = [];
    matches = [];
    points = [];
    isLoadingPlayers = false;
    isLoadingMatches = false;
    isLoadingPoints = false;

    playerManager = null;
    matchManager = null;
    pointManager = null;
    pointsHistory = [];
 
    addHistoryPoint(point) {
      this.pointsHistory.unshift(point);
    }

    removeHistoryPoint() {
      if(this.pointsHistory.legth>0)
        this.pointsHistory.shift();
    }

    get allPointsHistory() {
      return this.pointsHistory;
    }

    //TODO: agregar comupet get si es necesario
}
decorate(TenisMatchStore,{
  players: observable,
  matches: observable,
  points: observable,
  isLoadingPlayers: observable,
  isLoadingMatches: observable,
  isLoadingPoints: observable,
  playerManager: observable,
  matchManager: observable,
  pointManager: observable,
  pointsHistory: observable,
  allPointsHistory: computed,
});

const tenisMatchStore = new TenisMatchStore();

export default tenisMatchStore;