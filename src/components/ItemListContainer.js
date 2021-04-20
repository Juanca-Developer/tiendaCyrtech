import React from 'react';
import './ItemContainerList.css'
import ItemCount from './ItemCount';



export default function Login(props){

    return (
 
     <div className="container-home">
           
         <h1> {props.greeting}</h1>
         
        <ItemCount/> 
         
         
      
    </div>  

    )

}
