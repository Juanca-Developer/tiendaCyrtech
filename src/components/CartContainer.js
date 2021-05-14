import React, {useContext}from 'react'
import { CartContext } from '../context/CardContext';
import {Table, Button} from 'react-bootstrap'
import Cart from '../components/Cart'

export default function CartContainer() {

    const {limpiarCarrito, carrito} = useContext (CartContext);

    
      return (
        <>
      {carrito.map (x => {
        return <h1>{x.titulo}</h1>
        
      })}
      
      </>
      )
    }
     
    
