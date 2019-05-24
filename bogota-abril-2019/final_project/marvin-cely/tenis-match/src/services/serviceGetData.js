const serviceGetData = {
    listenAllElements: (store, collectionType) => {
      // Handle Server State
      store.isLoading['from'+collectionType.capitalize()] = true;
      store.hasErrorService['from' + collectionType.capitalize()] = false;

      // Do call
      const unsubcribe = store.fireStore.collection(collectionType)
        .onSnapshot((querySnapshot) => {
          let dataList = [];
          querySnapshot.forEach((doc) => {
            const data = Object.assign({}, doc.data(), {id: doc.id});
            dataList.push(data);
          });
          store[collectionType] = dataList;
          store.isLoading['from' + collectionType.capitalize()] = false;
          store.hasErrorService['from'+collectionType.capitalize()] = false;
        }, (error) => {
          store.isLoading['from' + collectionType.capitalize()] = false;
          store.hasErrorService['from'+collectionType.capitalize()] = true;
          console.log('listenAllElements Error: ' + error); //TODO: Revisar que hacer con el manejo de este error
        });
        return unsubcribe;
      },
}

export default serviceGetData;