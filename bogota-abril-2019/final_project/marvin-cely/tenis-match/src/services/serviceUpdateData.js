const serviceUpdateData = {
  updateData: (fireStore, collectionType, data) => {
    fireStore.collection(collectionType).doc(data.id)
      .update(data)
      .then(response => response)
      .catch(error => {
        throw new Error(error)
      });
  },
}
  
export default serviceUpdateData;