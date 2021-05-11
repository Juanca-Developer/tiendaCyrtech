import db from '../firebase'

const postCollection = db.collection('items')

export function getItems() {
  return postCollection.get()
  .then(snapshot=> {
    return snapshot.docs.map(doc => doc.data())

  })
  
}


export function getItemsById(itemsId) {

    return postCollection.doc(id).get()
        .then(snapshot=> {
          return snapshot.docs.map(doc => doc.data())
    })
  }
  
  