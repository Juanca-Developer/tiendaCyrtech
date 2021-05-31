import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
//import items from './items.json'
import { useParams } from "react-router-dom";
import { getDocDataAndId } from "../utils/firebaseUtil";

const { getItems , getCollection} = require("../../src/services/itemsService");

export default function ItemListContainer({ greeting, }) {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();


  useEffect(() =>{

    const unsubscribe = getCollection().onSnapshot(snapshot =>{
      const itemsResponse = snapshot.docs.map(getDocDataAndId);
      setData(itemsResponse)
    })
    return ()=> {
      unsubscribe();
    }
  },[])

  useEffect(() => {
    if (categoryId) {
      getItems().then((res) =>
        setData(
          res.filter(function (item) {
            return item.category === categoryId;
          })
        )
      );
    } else {
      getItems().then((res) => setData(res));
    }
  }, [categoryId]);

  return (
    <div>
      <div className="header">
        <h1>{greeting}</h1>
      </div>
      <div>
        <ItemList dataInput={data} />
      </div>
    </div>
  );
}
