import React,{useContext, useState} from "react";
import { Card , Row, Col, Button} from "react-bootstrap";
import ItemCount from "../components/ItemCount";
import { useHistory } from 'react-router-dom';
import {CartContext} from '../context/CardContext'
import './itemDetail.css'


export default function ItemDetail({ item }) {

  let history = useHistory();
  let cantidadCompra;
  const {agregarItem} = useContext(CartContext)
  const [show, setShow] = useState(true)

  
  function addButton (cantidad){
    setShow({
      hidden: true
    });
    cantidadCompra = cantidad;
       
    productoAgregado();
  }
  

  function productoAgregado(){
    const nuevoItem = {
      id: item.id,
      categoria: item.category,
      titulo: item.title,
      precio: item.price,
      cantidad: cantidadCompra
    };
    console.log(nuevoItem);
    agregarItem(nuevoItem);
  }
  return (

    <Card style={{ width: '65rem', margin:'5rem' }}>
  <Row className='no-gutters'>
  <Col>
  <Card.Img variant="medium" src={item.image} />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
      {item.description}
    </Card.Text>
    <ItemCount cantidadCarrito ={addButton}/>
    <Button variant ="dark "hidden={!show.hidden} onClick={() => history.push(`/cart`)}>Ir al Carrito</Button>
  </Card.Body>
  </Col>
  </Row>
</Card>
      
   /*   
         
     <Card style={{ width: '35rem', margin: '15px', }}>
    <Card.Img variant="bottom" src={item.image} alt= "foto-producto" />  
         <Card.Body>
            <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                  <p>{item.description}</p>
                  <Card.Title>Precio: $ {item.price}</Card.Title>
              </Card.Text>
                <ItemCount cantidadCarrito ={addButton}/>
                <Button variant ="dark "hidden={!show.hidden} onClick={() => history.push(`/cart`)}>Ir al Carrito</Button>
          </Card.Body>
       </Card>
        */
      
  );
}