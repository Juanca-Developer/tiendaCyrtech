import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import items from './items.json'


function ItemDetailContainer({itemId}){
    const[item, setItem]=useState([]);

    const isItemId = (item)=>{
        return item.id == itemId;

    };
    useEffect(() => {
        setTimeout(()=>{
            fetch("items.json",{
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                },
            })
            .then((response) => response.json())
            .then((data)=> setItem(data.find(isItemId)));
        }, 2000);
        
    }, []);
    return <div>{<ItemDetail item = {item}/>}</div>;
}
export default ItemDetailContainer;