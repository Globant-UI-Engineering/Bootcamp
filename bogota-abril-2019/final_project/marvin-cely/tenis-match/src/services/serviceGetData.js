const serviceGetData = {
    listenAllElementsList: (store, collectionType) => {   
      // Handle Server State 
      store.isLoading['from' + collectionType.capitalize()] = true;
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
          store.hasErrorService['from' + collectionType.capitalize()] = false;
        }, (error) => {
          store.isLoading['from' + collectionType.capitalize()] = false;
          store.hasErrorService['from' + collectionType.capitalize()] = true;
          console.log('listenAllElements Error: ' + error);
        });
        return unsubcribe;
      },
      listenAllElementsMap: (store, collectionType) => {
      // Handle Server State 
      store.isLoading['from' + collectionType.capitalize()] = true;
      store.hasErrorService['from' + collectionType.capitalize()] = false;   
      // Do call
      const unsubcribe = store.fireStore.collection(collectionType)
        .onSnapshot((querySnapshot) => {
          let dataList = [];
          querySnapshot.forEach((document) => dataList.push([document.id, document.data()]));
          store[collectionType] = new Map(dataList);
          store.isLoading['from' + collectionType.capitalize()] = false;
          store.hasErrorService['from' + collectionType.capitalize()] = false;
        }, (error) => {
          store.isLoading['from' + collectionType.capitalize()] = false;
          store.hasErrorService['from' + collectionType.capitalize()] = true;
          console.log('listenAllElements Error: ' + error);
        });
        return unsubcribe;
      },
}

export default serviceGetData;