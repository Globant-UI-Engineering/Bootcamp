import { observable, decorate } from "mobx";

class TenisMatchStore {    
    players = [];
    matchesList = [];
    pointsList = [];
    isLoading = false;
    example = null;
}
decorate(TenisMatchStore,{
  players: observable,
  matches: observable,
  points: observable,
  isLoading: observable,
});

const tenisMatchStore = new TenisMatchStore();

export default tenisMatchStore;