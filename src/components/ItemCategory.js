import React from 'react'
import Categories from './Categories'

export default function List({postdata}) {

    return (
        <div className="d-flex flex-md-row justify-content-around flex-wrap">
        {
            postdata.map((datos) => { 
            return (
                <Categories key={datos.categoria} data={datos} />
            )
            })
        }
        </div>
    )
}