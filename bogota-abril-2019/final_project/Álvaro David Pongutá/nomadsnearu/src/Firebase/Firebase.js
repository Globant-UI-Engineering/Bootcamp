import firebase from "firebase";

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCA2OIr36N77z6ABJeLqwNbaPGkquODo7E",
  authDomain: "nomadsnearu.firebaseapp.com",
  databaseURL: "https://nomadsnearu.firebaseio.com",
  projectId: "nomadsnearu",
  storageBucket: "nomadsnearu.appspot.com",
  messagingSenderId: "394000742871",
  appId: "1:394000742871:web:ecfebeca0499384f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;