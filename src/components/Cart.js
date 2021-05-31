import React, {useContext }from 'react'
import {CartContext} from '../context/CardContext'
import {Button, Table} from 'react-bootstrap'
import './Cart.css'


export default function Cart({itemSelect}) {
const {actualizarCarrito,removerItem} = useContext(CartContext);



function aumentarCantidad () {
    const nuevoArticulo = {
        id: itemSelect.id,
        cantidad: itemSelect.cantidad+1,
        
    };
    console.log(nuevoArticulo);
    actualizarCarrito(nuevoArticulo);
}
function disminuirCantidad () {
    const nuevoArticulo = {
        id: itemSelect.id,
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
    <img src={itemSelect.image} className="card-img-top" alt={itemSelect.categoria}/>
            </td>	
            <td>
				{itemSelect.categoria}
			</td>
			<td>
				{itemSelect.titulo}
			</td>
			<td>
				{itemSelect.precio*itemSelect.cantidad}
			</td>
            <td>
            {
                itemSelect.cantidad < 5 ? <Button onClick={aumentarCantidad} variant="primary" >+</Button> : <Button variant="primary" onClick={aumentarCantidad} disabled>+</Button>
             }
            
				{itemSelect.cantidad} 
            {
                itemSelect.cantidad > 1 ? <Button onClick={disminuirCantidad} variant="danger" >-</Button> : <Button variant="danger" onClick={disminuirCantidad} disabled>-</Button>
             }
                <Button onClick = {()=>removerItem(itemSelect.id)}>BORRAR</Button> 
                

            </td>
    </tr>
    
  </tbody>
</Table>
       
            
  

            
        
    )
}
