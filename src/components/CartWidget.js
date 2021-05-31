import React, {useContext} from 'react'
import Carrito from '../img/logo-carrito.png'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CardContext'
import { Badge} from "react-bootstrap"

export default function CartWidget() {

const {sumaCantidad} = useContext(CartContext)    


    return (
        <div>
           < Link to="/cart" className = "link">
           <img className="logo-carrito" src = {Carrito} alt = 'logo-carrito'/><Badge variant="secondary">{sumaCantidad} </Badge></Link>
           
        </div>
    )
}
