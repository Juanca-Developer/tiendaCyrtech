import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import items from './items.json'
import {useParams} from 'react-router-dom'


 function ItemDetailContainer({itemId}){

    const[item, setItem]=useState([]);
    const {itemsId} = useParams()

    /* const isItemId = (item) => {
        return item.id == itemId; 
    }*/        
    useEffect(() => {

        
        let producto = items.find (x => x.id == itemsId)
        setItem(producto)

        }, [itemId]);
        
    
    return (
    
    <div>{<ItemDetail item = {item}/>}
              
          </div>);
   }       

export default ItemDetailContainer;