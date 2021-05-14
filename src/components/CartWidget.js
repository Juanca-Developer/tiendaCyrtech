import React from 'react'
import Carrito from '../img/logo-carrito.png'
import {Link} from 'react-router-dom'


export default function CartWidget() {
    return (
        <div>
           < Link to="/cart" className = "link">
           <img className="logo-carrito" src = {Carrito} alt = 'logo-carrito'/></Link>
        </div>
    )
}
