import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList';
//import items from './items.json'
import {useParams} from 'react-router-dom'

const { getItems } = require ('../../src/services/itemsService');


export default function ItemListContainer({greeting,category}) {

    const [data, setData] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        getItems()
            .then(res => setData(res))
    },[])

    /* useEffect(() => {
        if (categoryId) {
            let producto = items.filter(x => x.categoria == categoryId)
            setData(producto);

        }else {
            new Promise((resolve, reject) => { 
                
                    resolve(items);
                     
            })
            .then(res=> setData(res))
        }
    }, [categoryId]); */
    


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
