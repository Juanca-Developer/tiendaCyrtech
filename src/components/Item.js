import React from 'react'
import ItemCount from '../components/ItemCount';
import {Link} from 'react-router-dom'
import { Button} from "react-bootstrap";
import './Item.css'



export default function Item({data}) {
    return (
        
        <div className="card h-100">
            <h5 className="card-title">{data.categoria}</h5>
            <img src={data.img} className="card-img-top" alt={data.categoria}/>
            <div className="card-body">
                <h5 className="card-title">{data.titulo}</h5>
                <p className="card-price">Precio: $ {data.precio}</p>
                <p className="card-price">Stock: {data.stock}</p>
                              
            </div>
            <div>
                <Button variant ="success" className ="button-link"> <Link className ="link"to = {`/productos/${data.id}`}>Ver Detalles</Link></Button>
                
            </div>
        </div>
        
    )
}