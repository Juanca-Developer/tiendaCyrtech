import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function ContextProvider({defaultValue= [], children}){

const[carrito, setCarrito]= useState(defaultValue)


function itemAgregado (id) {
    return carrito.some(item => item.id === id)
}

function agregarItem({id, titulo, precio, cantidad}) {
    
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
    setCarrito([...carrito, {id, titulo, precio, cantidad}])
}

function removerItem({id, titulo, precio, cantidad}) {
    
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
    setCarrito([...carrito, {id, titulo, precio, cantidad}])
}


function limpiarCarrito(){
    setCarrito([]);
}

return (
    <CartContext.Provider value={
        {
            carrito,
            setCarrito,
            agregarItem,
            removerItem,
            limpiarCarrito,
            
            
        }
    }>
        {children}
    </CartContext.Provider>
)

}
