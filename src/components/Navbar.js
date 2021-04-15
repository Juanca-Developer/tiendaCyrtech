import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "../img/cyrtech-logo-vector.png"
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <div>
       
      <Navbar bg="light" expand="lg">
           <Navbar.Brand href="#home">
          <img className="App-logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
               <Nav.Link href="#empresa">Empresa</Nav.Link>
               <Nav.Link href="#servicios">Servicios</Nav.Link>
               <Nav.Link href="#productos">Productos</Nav.Link>
               <Nav.Link href="#contacto">Contacto</Nav.Link>
             </Nav>
             
          </Navbar.Collapse>
          <CartWidget/>
      </Navbar>
      
    </div>
  )
}


