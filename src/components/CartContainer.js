import React, {useContext}from 'react'
import { CartContext } from '../context/CardContext';
import {Button} from 'react-bootstrap'
import Cart from '../components/Cart'
import {Link, useHistory }from 'react-router-dom'


export default function CartContainer() {

    const { carrito, vaciarCarrito} = useContext (CartContext);
    let history = useHistory()
    
    function handleToBuy(){
      history.push('/carrito/compra')
    }
    
      return (
        <div> 
        <h1> Resumen de Compra</h1>
        
        {carrito.map (x => (
        <Cart key={x.id} itemSelect={x} />
        
        
      ))}
      
       <Button onClick={vaciarCarrito}>Vaciar Carrito</Button>
       <Button> <Link className="link"  to={`/productos`}>Continuar comprando</Link>
            </Button>
            <Button onClick = {handleToBuy}> Procesar Compra</Button>  
       </div>
      )
    }
     
    
