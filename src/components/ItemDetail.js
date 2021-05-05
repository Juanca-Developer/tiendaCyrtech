import React,{useState} from "react";
import { Modal, Image} from "react-bootstrap";
import {useParams} from 'react-router-dom';
import ItemCount from "../components/ItemCount";
import './itemDetail.css'


export default function ItemDetail({ item }) {

  const [quantitytoAdd, setquantitytoAdd] = useState(true)
  

  function onAdd (cantidad){
    setquantitytoAdd(cantidad);
    
    console.log(quantitytoAdd)   
  }

  return (
    
      
      <Modal.Dialog>
      <Modal.Header closeButton>
      <Modal.Title>{item.titulo}</Modal.Title>
      </Modal.Header>
      <Image></Image>
      <Modal.Body>
      <p>{item.descripcion}</p>
      </Modal.Body>

      <Modal.Footer>
      <p>Precio $ {item.precio}</p>  

      <ItemCount cantidadCarrito ={onAdd}/> 
       </Modal.Footer>
      </Modal.Dialog>
    
    
  );
}