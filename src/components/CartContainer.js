import React, {useContext}from 'react'
import { CartContext } from '../context/CardContext';
import {Table, Button} from 'react-bootstrap'
import Cart from '../components/Cart'

export default function CartContainer() {

    const {limpiarCarrito} = useContext (CartContext);

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Item</th>
              <th>Cantidad</th>
              <th></th>
              
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Servidores</td>
              <td>Dell X4767</td>
              <td>2</td>
              <td>$158500</td>
              
            </tr>
            <tr>
              <td>Servidores</td>
              <td>Ibm X3650</td>
              <td>1</td>
              <td>$285000</td>
              
            </tr>
            <tr>
            <td>Switch</td>
              <td>Hp 1920</td>
              <td>1</td>
              <td>$28500</td>
              
            </tr>
          </tbody>
          <tfoot>
          <td><Button onClick ={limpiarCarrito}>Vaciar Carrito</Button></td>
          </tfoot>
        </Table>
      </div>
    );
    }
    

