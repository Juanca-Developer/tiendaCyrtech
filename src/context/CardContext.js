import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function ContextProvider({defaultValue= [], children}){

const[carrito, setCarrito]= useState(defaultValue)


function itemAgregado (id) {
    return carrito.some(item => item.id === id)
}

function agregarItem({id, titulo, precio, cantidad, categoria, stock}) {
    
    const carritoActual = itemAgregado(id)
    if (carritoActual) {
        const nuevoCarrito = carrito.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: cantidad + item.cantidad
                }
            }
            return item
        })
        return setCarrito([...nuevoCarrito])
    }
    setCarrito([...carrito, {id, titulo, precio, cantidad, categoria, stock}])
}

function removerItem({id, titulo, precio, cantidad, categoria, stock}) {
    
    const carritoActual = itemAgregado(id)
    if (carritoActual) {
        const nuevoCarrito = carrito.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: cantidad - item.cantidad
                }
            }
            return item
        })
        return setCarrito([...nuevoCarrito])
    }
    setCarrito([...carrito, {id, titulo, precio, cantidad, categoria, stock}])
}

function actualizarCarrito({id, categoria, titulo, precio, cantidad, stock}) {
    const isCurrentInCart = itemAgregado(id)
    if (isCurrentInCart) {
        const nuevoCarrito = carrito.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: cantidad
                }
            }
            return item
        })
        return setCarrito([...nuevoCarrito])
    }
    setCarrito([...carrito, {id, categoria, titulo, precio, cantidad, stock}])
}

function vaciarCarrito(){
    setCarrito([]);
}

return (
    <CartContext.Provider value={
        {
            carrito,
            setCarrito,
            actualizarCarrito,
            agregarItem,
            removerItem,
            vaciarCarrito,
            
            
        }
    }>
        {children}
    </CartContext.Provider>
)

}
