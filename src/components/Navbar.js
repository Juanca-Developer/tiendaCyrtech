import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import './Navbar.css'
import Nav from "react-bootstrap/Nav"
import Logo from "../img/cyrtech-logo-vector.png"
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
       
      <Navbar bg="light" expand="lg">
           <Navbar.Brand href="home">
          <img className="App-logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
               <Link to ="/empresa">Empresa</Link>
               <Link to="/servicios">Servicios</Link>
               <Link to="/productos">Productos</Link>
               <Link to="/categorias/Servidores">Servidores</Link>
               <Link to="/categorias/Switch">Switch</Link>
               <Link to="/contacto">Contacto</Link>
             </Nav>
             
          </Navbar.Collapse>
          <CartWidget/>
        
      </Navbar>
      
    </div>
  )
}


