import React from 'react'
import {Link} from 'react-router-dom'
import { Button} from "react-bootstrap";
import './Item.css'



export default function Item({data}) {
    return (
        
        <div className="card h-100">
            <h5 className="card-title">{data.category}</h5>
            <img src={data.image} className="card-img-top" alt={data.category}/>
            <div className="card-body">
                <h4 className="card-title">{data.title}</h4>
                <h5 className="card-price">Precio: $ {data.price}</h5>
                <p className="card-stock">Stock: {data.stock} unidades</p>
                              
            </div>
            <div>
                <Button variant ="success" className ="button-link"> <Link className ="link"to = {`/productos/${data.id}`}>Ver Detalles</Link></Button>
                
            </div>
        </div>
        
    )
}