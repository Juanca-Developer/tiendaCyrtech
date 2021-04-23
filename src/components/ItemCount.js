import React, {useState} from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function ItemCount() {

var stock = 5
  const [cantidad, setCantidad] = useState(1);
  


  function onIncrement() {
      if (stock > cantidad) {
          
          setCantidad(cantidad+ 1);

      } else {
          alert('La cantidad es mayor al Stock disponible')
      }
  }

  function onDecrement() {
    if (cantidad> 1) {
      setCantidad(cantidad - 1);
    } else {
      alert("Debe agregar algun producto");
    }
  }

    
    return (
      <div className="item-count">
         <Card >
           
             <Card.Body>
                
                <p> Stock Disponible = {stock}</p>
               
               <Button variant ="info" onClick ={onDecrement}> - </Button>
               Cantidad = {cantidad}
               <Button variant ="info" onClick ={onIncrement}> + </Button>
               <Button variant="primary">Agregar al Carrito</Button>
             </Card.Body>
          </Card>
       
      </div>
        
    
    )
  }
 
       
        
    
      