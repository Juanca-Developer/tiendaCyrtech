import React, {useState} from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function ItemCount({cantidadCarrito}) {

var stock = 5
  const [cantidad, setCantidad] = useState(1);
  


  function onIncrement() {
     setCantidad(cantidad+ 1);

      } 

  function onDecrement() {
      setCantidad(cantidad - 1);
    } 
  
  function agregarItem() {
    cantidadCarrito(cantidad);
  }
  
  
    
    return (
      < div  className="item-count">
        
         <Card >
           
             <Card.Body>
                
                <p> Stock Disponible = {stock}</p>
               {
                cantidad > 0 ? <Button variant ="info" onClick ={onDecrement}> - </Button> : <Button variant ="info" onClick ={onDecrement} disabled> - </Button>
               }
               Cantidad = {cantidad} 
               {
               cantidad < `${stock}` ? <Button variant ="info" onClick ={onIncrement}> + </Button> : <Button variant ="info" onClick ={onIncrement} disabled> + </Button>
               }
              
               {cantidad > 0 ? <Button variant="primary" onClick={agregarItem}>Agregar al Carrito</Button> : <Button variant ="primary" className="btn btn-success"onClick={agregarItem} disabled>Agregar al Carrito </Button>}
              
               
             </Card.Body>
          </Card>
          
      </div>
        
    
    )
  }
 
       
        
    
      