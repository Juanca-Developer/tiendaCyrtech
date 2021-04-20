import React, {useState} from 'react'
import Ibm3650 from '../img/ibmx3650.jpg'
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
         <Card style={{ width: '20rem', margin:'15px' }}>
           <Card.Img variant="top" src={Ibm3650} />
             <Card.Body>
                <Card.Title>Servidor IBM X3650</Card.Title>
                <p> Stock Disponible = {stock}</p>
               <Card.Text>
               Servidor de almacenamiento de alta densidad y 2 sockets optimizado, controlador RAID de 12 Gbps incorporado. Con un diseño innovador que ofrece un equilibrio óptimo de rendimiento, tiempo de actividad y almacenamiento.
               </Card.Text>
               <Button variant ="info" onClick ={onIncrement}> + </Button>
               Cantidad = {cantidad}
               <Button variant ="info" onClick ={onDecrement}> - </Button>
               <Button variant="primary">Agregar al Carrito</Button>
             </Card.Body>
          </Card>
       
      </div>
        
    
    )
  }
 
       
        
    
      