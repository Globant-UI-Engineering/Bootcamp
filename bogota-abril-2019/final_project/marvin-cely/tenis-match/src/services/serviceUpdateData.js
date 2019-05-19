const serviceUpdateData = {
  setData: (fireStore, collectionType, data) => {
    console.log(data.id);
    fireStore.collection(collectionType).doc(data.id)
      .set(data)
      .then(response => response)
      .catch(error => {
        throw new Error(error)
      });
  },
}
  
export default serviceUpdateData;