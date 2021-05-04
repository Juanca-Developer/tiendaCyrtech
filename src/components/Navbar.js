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
               <Link to ="/empresa" className="link">Empresa</Link>
               <Link to="/servicios"className="link" >Servicios</Link>
               <Link to="/productos"className="link">Productos</Link>
               <Link to="/categorias/Servidores"className="link">Servidores</Link>
               <Link to="/categorias/Switch"className="link">Switch</Link>
               <Link to="/contacto" className="link">Contacto</Link>
             </Nav>
             
          </Navbar.Collapse>
          <CartWidget/>
        
      </Navbar>
      
    </div>
  )
}


