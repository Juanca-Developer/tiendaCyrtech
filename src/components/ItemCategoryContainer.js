import React, {useState, useEffect} from 'react';
import ItemCategory from '../components/ItemCategory';
import items from './items.json'
import {useParams} from 'react-router-dom'




function ItemCategoryContainer({category}) {
    

        const[item, setItem]=useState([]);
        const {categoryId} = useParams()
    
        /* const isItemId = (item) => {
            return item.id == itemId; 
        }*/        
        useEffect(() => {
            
            let producto = items.filter (x => x.categoria == categoryId)
            setItem(producto)
    
            }, [categoryId]);
    
    return(
        <div>{<ItemCategory data = {item}/>}
              
          </div>
    )
}
export default ItemCategoryContainer;
