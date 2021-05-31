import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export default function ContextProvider({defaultValue= [], children}){

const[carrito, setCarrito]= useState(defaultValue)


function itemAgregado (id) {
    return carrito.some(item => item.id === id)
}

function agregarItem({id, titulo, precio, cantidad, categoria}) {
    
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
    setCarrito([...carrito, {id, titulo, precio, cantidad, categoria,}])
}

function removerItem(id) {
  const nuevoCarrito = carrito.filter((item => item.id !== id));
        setCarrito(nuevoCarrito);
}

function actualizarCarrito({id, categoria, titulo, precio, cantidad}) {
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
    setCarrito([...carrito, {id, categoria, titulo, precio, cantidad,}])
}

function vaciarCarrito(){
    setCarrito([]);
}

const cantidad = carrito.map (item => item.cantidad)

const sumaCantidad = cantidad.reduce((prev, next)=> prev + next, 0);

const precio = carrito.map(item => (item.precio * item.cantidad))   
  
const sumaPrecios = precio.reduce((prev, next) => prev + next, 0);

return (
    <CartContext.Provider value={
        {
            carrito,
            setCarrito,
            actualizarCarrito,
            agregarItem,
            removerItem,
            vaciarCarrito,
            sumaPrecios,
            sumaCantidad
            
            
        }
    }>
        {children}
    </CartContext.Provider>
)

}
