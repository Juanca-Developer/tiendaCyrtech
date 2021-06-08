import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import './Navbar.css'
import Nav from "react-bootstrap/Nav"
import Logo from "../img/cyrtech-logo-vector.png"
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
       
      <Navbar bg="light" expand="lg">
           <NavLink to ="/home" className="link-nav" >
          <img className="App-logo" src={Logo} alt="logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
               
               <NavLink to="/servicios"className="link-nav" >Servicios</NavLink>
               <NavLink to="/productos"className="link-nav">Productos</NavLink>
               <NavLink to="/categorias/Servidores"className="link-nav">Servidores</NavLink>
               <NavLink to="/categorias/Switch"className="link-nav">Switch</NavLink>
               <NavLink to="/contacto" className="link-nav">Contacto</NavLink>
             </Nav>
             
          </Navbar.Collapse>
          <CartWidget/>
        
      </Navbar>
      
    </div>
  )
}


