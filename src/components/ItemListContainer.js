import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
//import items from './items.json'
import { useParams } from "react-router-dom";

const { getItems } = require("../../src/services/itemsService");

export default function ItemListContainer({ greeting, category }) {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

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
