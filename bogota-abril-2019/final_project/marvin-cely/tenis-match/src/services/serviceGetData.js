const serviceGetData = {
  obtainAll: (store, fireStore, collectionType) => {
    store['isLoading'+collectionType.capitalize()] = true;
    let unsubcribe = fireStore.collection(collectionType)
      .onSnapshot((querySnapshot) => {
        let dataList = [];
        querySnapshot.forEach((doc) => {
          const data = Object.assign({}, doc.data(), {id: doc.id});
          dataList.push(data);
        });
        store[collectionType] = dataList;
        store['isLoading' + collectionType.capitalize()] = false;
      })
      return unsubcribe;
    },
}

export default serviceGetData;