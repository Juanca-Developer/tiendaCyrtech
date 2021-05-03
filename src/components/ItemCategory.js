import React from 'react'
import Categories from './Categories'

export default function List({data}) {

    return (
        <div className="d-flex flex-md-row justify-content-around flex-wrap">
        {
            data.map((datos) => { 
            return (
                <Categories key={datos.categoria} data={datos} />
            )
            })
        }
        </div>
    )
}