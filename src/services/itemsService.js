//import { getDocDataAndId } from '../../utils/firebaseUtil';
import db from '../firebase'

const postCollection = db.collection('Items');

console.log(postCollection)


export function getCollection() {
  return postCollection;
}

export function getItems (){
  return postCollection.get ()
  .then (snapshot => {
    return snapshot.docs.map(doc=> doc.data())
  })
}

/* export async function getItems() {
  const docRef = await postCollection.get ()
   
  const items = docRef.docs.map(getDocDataAndId) 
  
return items;
} */

  
export function getItemsById(id) {

    return postCollection.doc(id).get()
        .then(snapshot=> {
          return snapshot.docs.map(doc => doc.data())
    }) 
  }
  
  