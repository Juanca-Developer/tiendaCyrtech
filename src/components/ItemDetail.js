import React,{useContext, useState} from "react";
import { Card, Button} from "react-bootstrap";
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
      categoria: item.categoria,
      titulo: item.titulo,
      precio: item.precio,
      cantidad: cantidadCompra
    };
    console.log(nuevoItem);
    agregarItem(nuevoItem);
  }
  return (

       
     <Card style={{ width: '35rem', margin: '15px', }}>
        <Card.Img variant="bottom" src={item.img} alt= "foto-producto" />
         <Card.Body>
            <Card.Title>{item.titulo}</Card.Title>
              <Card.Text>
                  <p>{item.descripcion}</p>
                  <Card.Title>Precio: $ {item.precio}</Card.Title>
              </Card.Text>
                <ItemCount cantidadCarrito ={addButton}/>
                <Button variant ="dark "hidden={!show.hidden} onClick={() => history.push(`/cart`)}>Ir al Carrito</Button>
          </Card.Body>
       </Card>
      
  );
}