import { getDocDataAndId } from '../../utils/firebaseUtil';
import {db} from '../firebase'

const postCollection = db.collection('Items')


export function getCollection() {
  return postCollection;
}



export async function getItems() {
  const docRef = await postCollection.get ()
   
  const items = docRef.docs.map(getDocDataAndId) 
  
return items;
}

  

export function getItemsById(itemsId) {

    return postCollection.doc(id).get()
        .then(snapshot=> {
          return snapshot.docs.map(doc => doc.data())
    })
  }
  
  