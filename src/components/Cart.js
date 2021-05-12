import React, {useContext }from 'react'
import {CartContext} from '../context/CardContext'
import {Button} from 'react-bootstrap'

export default function Cart({itemSelect}) {
const {agregarItem,removerItem} = useContext(CartContext);




    return (
        <div>
         <Button onClick={agregarItem}>+</Button>
        </div>
    )
}
