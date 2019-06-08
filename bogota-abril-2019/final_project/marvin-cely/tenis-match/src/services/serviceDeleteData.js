const serviceDeleteData = {
  removeData: (fireStore, collectionType, dataId) => {
    fireStore.collection(collectionType).doc(dataId)
      .delete()
      .then(response => response)
      .catch(error => {
        throw new Error(error)
      });
  },
}
  
export default serviceDeleteData;