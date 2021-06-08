import React, {useContext, useState} from 'react';
import { CartContext } from '../context/CardContext';
import "firebase/firestore";
import orderService from '../services/orderServices';
import { useHistory } from 'react-router';
import {Table} from 'react-bootstrap'
import './FormBuy.css' 


export default function FormBuy() {

    let history = useHistory()
    const {carrito, sumaPrecios, vaciarCarrito} = useContext(CartContext)
    const [ docRef, setDocRef ] = useState('')
    const [formData, setFormData] = useState({  email:'',
                                                name:'',
                                                phone:'', 
                                                adress:''})

    const handleInputChange = (event) => {
            setFormData({
                ...formData,
                [event.target.name] : event.target.value
    })}


    function sendOrder() {
        console.log(formData)
        orderService(carrito, formData, sumaPrecios)
            .then(res =>{ 
            setDocRef(res)
            vaciarCarrito()
        });
    }

    function backToHome(){
        history.push("/home")
    }

    
    return (
        <div className = "container-general">
          <div>
              
          { !docRef ? <div> <h2>Tu compra:</h2> 
                    {
                        carrito.map(item =>{

                            return(
                                <Table>
  
                                 <div className = "container-celda"> 
                                     <tr>
                                         <td className = "celda-detalle">{item.titulo}</td>
                                         <td className = "celda-detalle">{item.cantidad}</td>
                                         <td className = "celda-detalle">${item.precio}</td>
      
                                     </tr>
                                     </div>  
                                </Table>
                                
                            
                            )
                        })
                    }
                <p className = "container-total">Total: ${sumaPrecios}</p>
                <h2>Tus datos personales:</h2>
                <form className = "container-form">
                    <label >
                        <input type="text" className="form-control" onChange={handleInputChange} name="name"  placeholder="Nombre y Apellido" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="email"  placeholder="Mail" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="phone"  placeholder="Telefono" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="adress"  placeholder="Domicilio" /> 
                        <br/>
                    </label>
                </form>
                    <button
                    disabled={!formData.name || !formData.email || !formData.phone|| !formData.adress }
                    className='buybtn btn btn-success' onClick={() => sendOrder()}>Finalizar Compra</button> </div> : 
                <div className = "docref">
                    <h2>Detalle de compra</h2>
                    <h5> Numero de Compra: #{docRef} </h5>
                    <h5> Dirección de envío: {formData.adress}</h5>
                    
                    <button className=" btn btn-success" onClick={() => backToHome()}>Volver al home</button>
                </div>
                }
          </div>
        </div>
    )}


                


