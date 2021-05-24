import React from 'react'
import Item from './Item'

export default function List({dataInput}) {

    return (
        <div className="d-flex flex-md-row justify-content-around flex-wrap">
        {
            dataInput.map((datos) => { 
            return (
                <Item key={datos.id} data={datos}/>
            )
            })
        }
        </div>
    )
}