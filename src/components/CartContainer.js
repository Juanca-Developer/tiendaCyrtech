import React, {useContext}from 'react'
import { CartContext } from '../context/CardContext';
import {Button, Table} from 'react-bootstrap'
import Cart from '../components/Cart'
import {Link, useHistory }from 'react-router-dom'
import './CartContainer.css'


export default function CartContainer() {

    const { carrito, vaciarCarrito, sumaPrecios} = useContext (CartContext);
    let history = useHistory()
    
    function handleToBuy(){
      history.push('/carrito/compra')
    }
    
      return (
        <div> 
            <h1> Resumen de Compra</h1>
         
          <Table> 
        
  
        { carrito.length == 0 &&
                <div>
                    
                    <h5 className = "mensaje-carrito"> Carrito vacío, Adquirí algún producto</h5>
                    
                    
                </div>
            }
            
        <div>
                    {carrito.map (x => (
                        <Cart key={x.id} itemSelect={x} />
                    ))}
        
        
        </div>
        { carrito.length !== 0 &&
                <div className = "container-procesocompra">
                  <div> 
                  <h5>Total $ {sumaPrecios} </h5> 
                  </div>
                    <Button className = "boton-compra" variant = "success" onClick = {handleToBuy}> Procesar Compra</Button>
                    
                    
                </div>
                
              
              
        }
            
          <div className = "btn-carrito"> 
        <Button className = "btn-vaciarcarrito"onClick={vaciarCarrito}>Vaciar Carrito</Button>
       <Button> <Link className="link"  to={`/productos`}>Continuar comprando</Link> </Button>
       </div>

       </Table> 
         
       
       </div> 
       
      )
    }
     
    
