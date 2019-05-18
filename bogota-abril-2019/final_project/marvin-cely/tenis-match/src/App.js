import React from 'react';
import './App.css';
import firebase from 'firebase';
import config from './services/config/firebaseConfig';

firebase.initializeApp(config);
const dataBase = firebase.firestore();
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Crear Nuevo con ID automático
    /* dataBase.collection("users").add({
      first: "Holiiii",
      last: "Helooo",
      born: 1994
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    }); */

    // Crear y actualizar
    /* dataBase.collection("cities").doc("LA").set({
      name: "Bogotá",
      state: "Cundi",
      country: "Colombia"
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    }); */

    /**
     * add -> Nuevo con Id automático
     * set -> Nuevo o actualización especificando todo 
     * doc -> elemento con id automático pero vacio
     * update-> Actualizar documento
     * delete -> Eliminar documento
     *  */
  }


  render() {
    return (
        <div>
          Hello world!
        </div>
    );
  }
}

export default App;
