import React from 'react'
import ItemCount from '../components/ItemCount';

export default function Item({data}) {
    return (
        <div className="card h-100">
            <img src={data.img} className="card-img-top" alt={data.categoria}/>
            <div className="card-body">
                <h5 className="card-title">{data.titulo}</h5>
                <p className="card-text">{data.descripcion}</p>
                <p className="card-price">Precio: $ {data.precio}</p>
            </div>
            <div>
                <ItemCount producto={data.categoria} />
            </div>
        </div>
    )
}