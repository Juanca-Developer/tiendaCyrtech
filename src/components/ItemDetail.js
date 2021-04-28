import React from "react";
import { Modal, Button } from "react-bootstrap";
import ItemCount from "../components/ItemCount";
import './itemDetail.css'

export default function ItemDetail({ item }) {
  

  return (
    <div>
      
      <Modal.Dialog>
      <Modal.Header closeButton>
      <Modal.Title>{item.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img src={item.img}/>
      <p>{item.descripcion}</p>
      </Modal.Body>

      <Modal.Footer>
      <ItemCount/>    
      </Modal.Footer>
      </Modal.Dialog>
    </div>
    
  );
}