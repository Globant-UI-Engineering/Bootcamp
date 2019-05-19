import { observable, decorate } from "mobx";
import firebaseConfig from '../services/config/firebaseConfig';

class Connect {
  constructor() {
    this.fireStore = firebaseConfig.initializeFireBase();
  }
}
decorate(Connect,{
  fireStore: observable,
});

const dataBase = new Connect();

export default dataBase;