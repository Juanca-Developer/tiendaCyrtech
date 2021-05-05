import React, {useState} from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function ItemCount({cantidadCarrito}) {

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
  function addCart() {
    cantidadCarrito(cantidad)
  }
    
    return (
      <div className="item-count">
         <Card >
           
             <Card.Body>
                
                <p> Stock Disponible = {stock}</p>
               
               <Button variant ="info" onClick ={onDecrement}> - </Button>
               Cantidad = {cantidad}
               <Button variant ="info" onClick ={onIncrement}> + </Button>
               {cantidad > 0 ? <Button variant="primary" onClick={addCart}>Agregar al Carrito</Button> : <Button variant ="primary"onClick={addCart} className="btn btn-success" disabled>Terminar Compra</Button>}
               
             </Card.Body>
          </Card>
       
      </div>
        
    
    )
  }
 
       
        
    
      