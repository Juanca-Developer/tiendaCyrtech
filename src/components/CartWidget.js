import React from 'react'
import Carrito from '../img/logo-carrito.png'

export default function CartWidget() {
    return (
        <div>
            <img className="logo-carrito" src = {Carrito} alt = 'logo-carrito'/>
        </div>
    )
}
