const serviceAddData = {
  createData: (fireStore, collectionType, data) => {
    fireStore.collection(collectionType)
      .add(data)
      .then(response => response)
      .catch(error => {
        throw new Error(error)
      });
  },
}
  
export default serviceAddData;