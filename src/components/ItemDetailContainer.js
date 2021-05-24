import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
//import items from './items.json'
import {useParams} from 'react-router-dom'

const { getItemsById } = require ('../../src/services/itemsService');

 function ItemDetailContainer(){

    const[item, setItem]=useState([]);
    const {itemsId} = useParams()

    useEffect(() => {
        getItemsById(itemsId)
          .then(data => setItem(data))
      },[itemsId])

        
    return (
    
    <div>{<ItemDetail item = {item}/>}
              
          </div>);
   }       

export default ItemDetailContainer;