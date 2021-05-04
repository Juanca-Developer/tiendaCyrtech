import React from 'react'
import Categories from './Categories'

export default function List({data}) {

    return data.map((datos) => { 
        
                    
            return (
                <div className="d-flex flex-md-row justify-content-around flex-wrap">
                <Categories key={datos.id} data={datos} />
                </div>
            )
         
        }
    )  
    
}