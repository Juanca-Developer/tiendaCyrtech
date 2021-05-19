import React, {useContext }from 'react'
import {CartContext} from '../context/CardContext'
import {Button, Image, Table} from 'react-bootstrap'
import './Cart.css'


export default function Cart({itemSelect}) {
const {actualizarCarrito,agregarItem,removerItem} = useContext(CartContext);


function aumentarCantidad () {
    const nuevoArticulo = {
        id: itemSelect.id,
        categoria: itemSelect.categoria,
        titulo: itemSelect.titulo,
        precio: itemSelect.precio,
        cantidad: itemSelect.cantidad+1,
        stock: itemSelect.stock
    };
    console.log(nuevoArticulo);
    actualizarCarrito(nuevoArticulo);
}
function disminuirCantidad () {
    const nuevoArticulo = {
        id: itemSelect.id,
        categoria: itemSelect.categoria,
        titulo: itemSelect.titulo,
        precio: itemSelect.precio,
        cantidad: itemSelect.cantidad-1
    };
    console.log(nuevoArticulo);
    actualizarCarrito(nuevoArticulo);
}

return (

    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Categoria</th>
      <th>Detalle</th>
      <th>Precio </th>
      <th>Cantidad </th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> 
				<Image className="img-cart" src= {itemSelect.img}></Image>
            </td>	
            <td>
				{itemSelect.categoria}
			</td>
			<td>
				{itemSelect.titulo}
			</td>
			<td>
				{itemSelect.precio}
			</td>
            <td>
            {
                itemSelect.cantidad < 5 ? <Button onClick={aumentarCantidad} variant="primary" >+</Button> : <Button variant="primary" onClick={aumentarCantidad} disabled>+</Button>
             }
            
				{itemSelect.cantidad} 
            {
                itemSelect.cantidad > 1 ? <Button onClick={disminuirCantidad} variant="danger" >-</Button> : <Button variant="danger" onClick={disminuirCantidad} disabled>-</Button>
             }
                <Button onclick = {removerItem}>BORRAR</Button>        
            </td>
    </tr>
   
  </tbody>
</Table>
       
            
  

            
        
    )
}
