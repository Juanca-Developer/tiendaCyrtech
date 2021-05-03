import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList';
import items from './items.json'
import {useParams} from 'react-router-dom'




export default function ItemListContainer({greeting,category}) {
    const [data, setData] = useState([]);
    

    

    new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(items);
             }, 2000);
    })
    .then(res=> setData(res))

    

    return(
        <div>
            <div className="header">
                <h1>{greeting}</h1>
                
            </div>
            <div>
                <ItemList dataInput={data}/>
                
            </div>
        </div>
    )
}
