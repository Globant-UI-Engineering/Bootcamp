const serviceGetData = {
  obtainAll: (store, fireStore, collectionType) => {
    store.isLoading = true; 
    let unsubcribe = fireStore.collection(collectionType)
      .onSnapshot((querySnapshot) => {
        let dataList = [];
        querySnapshot.forEach((doc) => {
            dataList.push(doc.data());
        });
        
        store[collectionType] = dataList;
        store.isLoading = false;
      })
      return unsubcribe;
    },
}

export default serviceGetData;